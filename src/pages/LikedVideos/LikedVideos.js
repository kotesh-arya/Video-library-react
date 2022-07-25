import React, { useEffect, useState } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import likedVideosCSS from "../LikedVideos/LikedVideo.module.css";
import { Link } from "react-router-dom";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import axios from "axios";
function LikedVideos() {
  const [likedVideos, setLikedVideos] = useState([]);
  const encodedToken = localStorage.getItem("JWT_TOKEN");
  const getLikedVideos = async () => {
    const response = await axios.get("/api/user/likes", {
      headers: {
        authorization: encodedToken,
      },
    });
    // console.log(response.data);
    setLikedVideos(response.data.likes);
  };
  useEffect(() => {
    getLikedVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={likedVideosCSS.container}>
        <div className={likedVideosCSS["list-container"]}>
          {likedVideos.map((video) => {
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

export { LikedVideos };
