import React, { useEffect, useState } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import WatchlaterCSS from "../Watchlater/Watchlater.module.css";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import { Link } from "react-router-dom";
import axios from "axios";
function Watchlater() {
  const [watchLater, setWatchLater] = useState([]);
  const encodedToken = localStorage.getItem("JWT_TOKEN");
  const getWatchLaterVideos = async () => {
    const response = await axios.get("/api/user/watchlater", {
      headers: {
        authorization: encodedToken,
      },
    });
    setWatchLater(response.data.watchlater);
  };
  useEffect(() => {
    getWatchLaterVideos();
  }, []);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={WatchlaterCSS.container}>
        <div className={WatchlaterCSS["list-container"]}>
          {watchLater.map((video) => {
            return (
              <Link to={`/videos/${video._id}`} key={video._id}>
                <Videocard
                  title={video.title}
                  creator={video.creator}
                  thumbNail={video.thumbNail}
                  logo={video.creatorLogo}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Watchlater };
