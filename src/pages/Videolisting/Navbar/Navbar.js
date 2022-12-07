import React from "react";
import logo from "../Navbar/assets/streamStar-logo.png";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarCSS from "../Navbar/Navbar.module.css";
import { useAuth } from "../../../contexts/authContext";

function Navbar() {
  const { userName } = useAuth();
  return (
    <div>
      <nav className={NavbarCSS["flex-div"]}>
        <div className={`${NavbarCSS["nav-left"]} ${NavbarCSS["flex-div"]}`}>
          <GiHamburgerMenu className={NavbarCSS["menu-icon"]} />
          <Link to="/">
            <img src={logo} className={NavbarCSS["logo"]} alt="" />
          </Link>
        </div>
        <div className={`${NavbarCSS["nav-right"]} ${NavbarCSS["flex-div"]}`}>
          <Link to="/signin">
            <div className={`${NavbarCSS["link-div"]}`}>
              {userName && (
                <h2>
                  Hello 👋{" "}
                  {userName.length < 8 ? userName : userName.slice(0, 8)}
                </h2>
              )}
              {/* <FaUserAlt className={NavbarCSS["user-icon"]} /> */}
              <button className={`  ${NavbarCSS["login-btn"]}`}>
                {userName ? "LOGOUT" : "LOGIN"}
              </button>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export { Navbar };
