import React, { useEffect, useState } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import WatchlaterCSS from "../Watchlater/Watchlater.module.css";
import { Videocard } from "../Videolisting/Videocard/Videocard";
// import { HorizontalCard } from "../HorizontalCard/Horizontalcard";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useWatchlater } from "../../contexts/watchlaterContext";
function Watchlater() {
  const { token, userName } = useAuth();
  console.log(token, userName);
  const { watchLater } = useWatchlater();
  console.log(watchLater);
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
                // <Link to={`/videos/${video._id}`}>
                <Videocard
                  key={index}
                  title={video.title}
                  creator={video.creator}
                  thumbNail={video.thumbNail}
                  logo={video.creatorLogo}
                  id={video._id}
                  nonExploreCard={true}
                />
                //  </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export { Watchlater };
