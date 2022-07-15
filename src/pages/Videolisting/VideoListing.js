import React from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import { Videocard } from "./Videocard/Videocard";
import VideoListingCSS from "../Videolisting/VideoListing.module.css";
import { Link } from "react-router-dom";
function VideoListing() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={VideoListingCSS.container}>
        <ul className={VideoListingCSS.categories}>
          <li>All</li>
          <li>Hollywood</li>
          <li>Bollywood</li>
          <li>Tollywood</li>
          <li>Kollywood</li>
        </ul>
        <div className={VideoListingCSS["list-container"]}>
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

export { VideoListing };
