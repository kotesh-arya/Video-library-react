import React from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import WatchlaterCSS from "../Watchlater/Watchlater.module.css";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import { Link } from "react-router-dom";

function Watchlater() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={WatchlaterCSS.container}>
        <div className={WatchlaterCSS["list-container"]}>
          <Link to="/singlevideo">
            <Videocard />
          </Link>
          <Link to="/singlevideo">
            <Videocard />
          </Link>
          <Link to="/singlevideo">
            <Videocard />
          </Link>
          <Link to="/singlevideo">
            <Videocard />
          </Link>
          <Link to="/singlevideo">
            <Videocard />
          </Link>
          <Link to="/singlevideo">
            <Videocard />
          </Link>
          <Link to="/singlevideo">
            <Videocard />
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Watchlater };
