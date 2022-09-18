import React from "react";
import SidebarCSS from "../Sidebar/Sidebar.module.css";
import { Link } from "react-router-dom";
import {
  MdOutlineExplore,
  MdWatchLater,
  MdHistory,
  MdOutlinePlaylistPlay,
} from "react-icons/md";
import {AiFillLike} from "react-icons/ai"
function Sidebar() {
  return (
    <div>
      <div className={SidebarCSS.sidebar}>
        <div className={SidebarCSS["shortcut-links"]}>
          <Link className={SidebarCSS["shortcut-link"]} to="/videolisting">
            <MdOutlineExplore className={SidebarCSS["sidebar-icon"]} />
            <p className={SidebarCSS["sidebar-text"]}>Explore</p>
          </Link>

          <Link className={SidebarCSS["shortcut-link"]} to="/watchlater">
            <MdWatchLater className={SidebarCSS["sidebar-icon"]} />
            <p className={SidebarCSS["sidebar-text"]}>Watch Later</p>
          </Link>

          <Link className={SidebarCSS["shortcut-link"]} to="/history">
            <MdHistory className={SidebarCSS["sidebar-icon"]} />
            <p className={SidebarCSS["sidebar-text"]}>History</p>
          </Link>
          <Link className={SidebarCSS["shortcut-link"]} to="/likedvideos">
            <AiFillLike className={SidebarCSS["sidebar-icon"]} />
            <p className={SidebarCSS["sidebar-text"]}>Liked Videos</p>
          </Link>

          <Link className={SidebarCSS["shortcut-link"]} to="/playlist">
            <MdOutlinePlaylistPlay className={SidebarCSS["sidebar-icon"]} />
            <p className={SidebarCSS["sidebar-text"]}>Playlist</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
