import React, { useEffect, useState } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import { Videocard } from "./Videocard/Videocard";
import VideoListingCSS from "../Videolisting/VideoListing.module.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../contexts/videoContext";
import axios from "axios";
function VideoListing() {
  const { videos } = useVideo();

  const [videoList, setVideoList] = useState([]);

  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const response = await axios.get("/api/categories");
    setCategories(response.data.categories);
  };
  const getVideos = async () => {
    const response = await axios.get("/api/videos");
    const videos = await response.data.videos;
    setVideoList(videos);
  };
  useEffect(() => {
    getCategories();
    getVideos();
  }, []);

  const categoriesList = categories.map((category) => category.categoryName);
  const mainCategories = ["All", ...new Set(categoriesList)];

  const filterVideos = (category) => {
    if (category === "All") {
      setVideoList(videos);
      return;
    } else {
      const filteredItems = videos.filter(
        (video) => video.category === category
      );
      setVideoList(filteredItems);
    }
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={VideoListingCSS.container}>
        <ul className={VideoListingCSS.categories}>
          {mainCategories.map((category, index) => {
            return (
              <li key={index} onClick={() => filterVideos(category)}>
                {category}
              </li>
            );
          })}
        </ul>
        <div className={VideoListingCSS["list-container"]}>
          {videoList.map((video) => {
            return (
              <Link to={`/videos/${video.id}`} key={video._id}>
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

export { VideoListing };
