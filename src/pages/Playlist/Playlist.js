import React from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import PlaylistCSS from "../Playlist/Playlist.module.css";
function Playlist() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={PlaylistCSS.container}>
        <h2>You have'nt created any playlist yet, go and create one</h2>
      </div>
    </div>
  );
}

export { Playlist };
