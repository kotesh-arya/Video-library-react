import React from "react";
import logo from "../Navbar/assets/streamStar-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarCSS from "../Navbar/Navbar.module.css";
import { useAuth } from "../../../contexts/authContext";

function Navbar() {
  const { userName, isLoggedIn, logoutUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <nav className={NavbarCSS["flex-div"]}>
        <div className={`${NavbarCSS["nav-left"]} ${NavbarCSS["flex-div"]}`}>
          <GiHamburgerMenu className={NavbarCSS["menu-icon"]} />{" "}
          <Link to="/">
            <img src={logo} className={NavbarCSS["logo"]} alt="" />
          </Link>
        </div>
        <div className={`${NavbarCSS["nav-right"]} ${NavbarCSS["flex-div"]}`}>
          <div className={`${NavbarCSS["link-div"]}`}>
            {isLoggedIn && (
              <h3>
                Hello 👋 {userName.length < 8 ? userName : userName.slice(0, 8)}
              </h3>
            )}

            <button
              onClick={() => {
                isLoggedIn ? logoutUser() : navigate("/signin");
              }}
              className={`  ${NavbarCSS["login-btn"]}`}
            >
              {isLoggedIn ? "LOGOUT" : "LOGIN"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export { Navbar };
