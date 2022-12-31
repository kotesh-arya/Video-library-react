import React, { useState, useEffect } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import PlaylistVideosCSS from "../PlaylistVideos/PlaylistVideos.module.css";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../contexts/playlistContext";
function PlaylistVideos() {
  const { playlists } = usePlaylist();
  const { playlistId } = useParams();
  const currentPlaylist = playlists.find((item) => item._id === playlistId);
  const { videos } = currentPlaylist;

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={PlaylistVideosCSS.container}>
        <div className={PlaylistVideosCSS["list-container"]}>
          {/* {currentPlaylist && (
            <h2>
              You are getting the single playlist object, now search for it's
              own property of "videos"{" "}
            </h2>
          )} */}
          {videos?.length === 0 ? (
            <h2>It's an empty playlist, add videos this category</h2>
          ) : (
            videos?.map((video) => {
              return (
                // <Link to={`/videos/${video._id}`} key={video._id}>
                <Videocard
                  key={video._id}
                  title={video.title}
                  creator={video.creator}
                  thumbNail={video.thumbNail}
                  logo={video.creatorLogo}
                  id={video._id}
                  nonExploreCard={true}
                  playlistId={playlistId}
                  playlistCard={true}
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

export { PlaylistVideos };
