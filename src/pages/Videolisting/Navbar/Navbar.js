import React from "react";
import logo from "../Navbar/assets/streamStar-logo.png";
import { Link } from "react-router-dom";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarCSS from "../Navbar/Navbar.module.css";
console.log(`${NavbarCSS["nav-center"]}${NavbarCSS["flex-div"]}`);
function Navbar() {
  return (
    <div>
      <nav className={NavbarCSS["flex-div"]}>
        <div className={`${NavbarCSS["nav-left"]} ${NavbarCSS["flex-div"]}`}>
          <GiHamburgerMenu className={NavbarCSS["menu-icon"]} />
          <Link to="/">
            <img src={logo} className={NavbarCSS["logo"]} alt="" />
          </Link>
        </div>
        <div className={`${NavbarCSS["nav-center"]} ${NavbarCSS["flex-div"]}`}>
          <div
            className={`${NavbarCSS["search-box"]} ${NavbarCSS["flex-div"]}`}
          >
            <input type="text" placeholder="search" />
            <img src="/images/search.png" alt="" /> <FaSearch />
          </div>
          <FaMicrophone className={NavbarCSS["mic-icon"]} />
        </div>
        <div className={`${NavbarCSS["nav-right"]} ${NavbarCSS["flex-div"]}`}>
          <p>User Name</p>
        </div>
      </nav>
    </div>
  );
}

export { Navbar };
