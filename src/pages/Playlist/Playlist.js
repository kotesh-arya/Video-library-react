import React from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import PlaylistCSS from "../Playlist/Playlist.module.css";
import { usePlaylist } from "../../contexts/playlistContext";
import { PlaylistCard } from "../PlaylistCard/PlaylistCard";
import { Link } from "react-router-dom";

function Playlist() {
  const { playlists } = usePlaylist();
  let emptyPlaylist;
  playlists.map((playlist) =>
    playlist.length === 0 ? (emptyPlaylist = true) : (emptyPlaylist = false)
  );
 
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={PlaylistCSS.container}>
        <div className={PlaylistCSS["list-container"]}>
          {playlists.length === 0 ? (
            <h2>
              You have'nt created any playlist yet, create and add videos to
              show here
            </h2>
          ) : (
            playlists.map((playlist) => {
              return (
                // <Link key={playlist._id} to={`/playlists/${playlist._id}`}>
                <PlaylistCard
                  title={playlist.title}
                  playlistId={playlist._id}
                  imageSource={
                    playlist.videos[0] && playlist.videos[0].thumbNail
                  }
                  emptyPlaylist={emptyPlaylist}
                />
                // </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export { Playlist };
