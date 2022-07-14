import React from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import HistoryCSS from "../History/History.module.css";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import { Link } from "react-router-dom";

function History() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={HistoryCSS.container}>
        <div className={HistoryCSS["list-container"]}>
          <Link to="/singlevideo">
            <Videocard />
          </Link>
          <Link to="/singlevideo">
            <Videocard />
          </Link><Link to="/singlevideo">
            <Videocard />
          </Link><Link to="/singlevideo">
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

export { History };
