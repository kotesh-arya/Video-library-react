import React, { useEffect, useState } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import likedVideosCSS from "../LikedVideos/LikedVideos.module.css";
import { Link } from "react-router-dom";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import { useLikes } from "../../contexts/likeContext";
function LikedVideos() {
  const { likedVideos } = useLikes();
  likedVideos.reverse();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={likedVideosCSS.container}>
        <div className={likedVideosCSS["list-container"]}>
          {likedVideos.length === 0 ? (
            <h2>You have'nt liked any videos yet </h2>
          ) : (
            likedVideos?.map((video) => {
              return (
                <Videocard
                  key={video._id}
                  title={video.title}
                  creator={video.creator}
                  thumbNail={video.thumbNail}
                  logo={video.creatorLogo}
                  id={video._id}
                  nonExploreCard={true}
                  likedVideoCard={true}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export { LikedVideos };
