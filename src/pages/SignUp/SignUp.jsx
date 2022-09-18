import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SignUpCSS from "../SignUp/SignUp.module.css";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { useAuth } from "../../contexts/authContext";
function SignUp() {
  const { signupUser } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const firstNameData = useRef();
  useEffect(() => {
    firstNameData.current.focus();
  },[]);
  return (
    <div>
      <Navbar />
      <div className={SignUpCSS.container}>
        <div className={SignUpCSS["signup-container"]}>
          <h1 className={SignUpCSS["header-large"]}>SIGN UP</h1>

          <div className={SignUpCSS["input-container"]}>
            <div className={SignUpCSS["input"]}>
              <label htmlFor="input-box">First Name</label>
              <input
                className={`input-box basic ${SignUpCSS["text-field"]}`}
                type="text"
                placeholder="Enter your First name"
                value={formData.firstName}
                ref={firstNameData}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }));
                }}
              />
            </div>

            <div className={SignUpCSS["input"]}>
              <label htmlFor="input-box">Last Name</label>
              <input
                className={`input-box basic ${SignUpCSS["text-field"]}`}
                type="text"
                placeholder="Enter your Last name"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }));
                }}
              />
            </div>
            <div className={SignUpCSS["input"]}>
              <label htmlFor="input-box">E-mail adddress</label>
              <input
                className={`input-box basic ${SignUpCSS["text-field"]}`}
                type="text"
                placeholder="user@yahoo.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
            </div>
            <div className={SignUpCSS["input"]}>
              <label htmlFor="input-box">Password</label>
              <input
                className={`input-box basic ${SignUpCSS["text-field"]}`}
                type="password"
                placeholder="************"
                value={formData.password}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
          </div>

          <div className={SignUpCSS["signup-checkbox-text"]}>
            <input className={SignUpCSS["check-box"]} type="checkbox" />
            <label className="check-label" htmlFor="check-box">
              I accept all terms & conditions
            </label>
          </div>

          <button
            className={`btn btn-primary ${SignUpCSS["signup"]}`}
            onClick={() => {
              signupUser(
                formData.firstName,
                formData.lastName,
                formData.email,
                formData.password
              );
            }}
          >
            Create new Account
          </button>
          <h3>
            <Link className={SignUpCSS["login-link"]} to="/signin">
              Already have an account &gt;
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export { SignUp };
