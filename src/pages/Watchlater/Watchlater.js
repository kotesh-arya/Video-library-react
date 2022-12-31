import React, { useEffect, useState } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import WatchlaterCSS from "../Watchlater/Watchlater.module.css";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useWatchlater } from "../../contexts/watchlaterContext";
function Watchlater() {
  const { token, userName } = useAuth();
  const { watchLater } = useWatchlater();
  watchLater.reverse();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={WatchlaterCSS.container}>
        <div className={WatchlaterCSS["list-container"]}>
          {watchLater?.length === 0 ? (
            <h2>The watchlater is empty please add to show up here</h2>
          ) : (
            watchLater?.map((video, index) => {
              return (
                <Videocard
                  key={index}
                  title={video.title}
                  creator={video.creator}
                  thumbNail={video.thumbNail}
                  logo={video.creatorLogo}
                  id={video._id}
                  nonExploreCard={true}
                  watchlaterCard={true}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export { Watchlater };
