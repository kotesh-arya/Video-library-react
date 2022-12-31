import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInCSS from "../SignIn/SignIn.module.css";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { useAuth } from "../../contexts/authContext";
function SignIn() {
  const { loginUser, userDispatch, isLoggedIn } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <Navbar />

      <div className={SignInCSS.container}>
        <div className={SignInCSS["login-container"]}>
          <h1 className={SignInCSS["header-large"]}>SIGN IN</h1>
          <div className={SignInCSS["input"]}>
            <label htmlFor="input-box">E-mail adddress</label>
            <input
              className={`input-box basic ${SignInCSS["text-field"]}`}
              type="text"
              placeholder="user@yahoo.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className={SignInCSS["input"]}>
            <label htmlFor="input-box">Password</label>
            <input
              className={`input-box basic ${SignInCSS["text-field"]}`}
              type="password"
              placeholder="************"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <div className={SignInCSS["handy-div"]}>
            <div className={SignInCSS["checkbox-text"]}>
              <input className={SignInCSS["check-box"]} type="checkbox" />
              <label className={SignInCSS["check-label"]} htmlFor="check-box">
                Remind Me
              </label>
            </div>
            <a className={SignInCSS["forgot-password"]} href="#">
              Forgot Password
            </a>
          </div>
          <button
            className={`btn btn-primary ${SignInCSS["login-btn"]}`}
            onClick={() => {
              if (formData.email !== "" && formData.password !== "") {
                loginUser(formData.email, formData.password);
                userDispatch({
                  type: "UPDATE_USER_DATA",
                  payload: {
                    email: formData.email,
                    password: formData.password,
                  },
                });
              }
            }}
          >
            SIGN IN
          </button>
          <button
            className={`btn btn-primary ${SignInCSS["login-btn"]}`}
            onClick={() => {
              if (formData.email === "" && formData.password === "") {
                loginUser("test@gmail.com", "test@123");
                userDispatch({
                  type: "UPDATE_USER_DATA",
                  payload: { email: "test@gmail.com", password: "test@123" },
                });
              }
            }}
          >
            Log In with test credentials
          </button>
          <h3>
            <Link className={SignInCSS["signup-link"]} to="/Signup">
              Create new account &gt;
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export { SignIn };
