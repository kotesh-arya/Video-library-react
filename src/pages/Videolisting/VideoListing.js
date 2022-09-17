import React, { useEffect, useState } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import { Videocard } from "./Videocard/Videocard";
import VideoListingCSS from "../Videolisting/VideoListing.module.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../contexts/videoContext";
import axios from "axios";
import { useHistory } from "../../contexts/historyContext";
function VideoListing() {
  const { addToHistory } = useHistory();
  const { videoList } = useVideo();
  const shuffledVideos = videoList?.sort(() => 0.5 - Math.random());
  const [filteredVideos, setfilteredVideos] = useState(shuffledVideos);
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const response = await axios.get("/api/categories");
    setCategories(response.data.categories);
  };
  const getVideos = async () => {
    const response = await axios.get("/api/videos");
    setfilteredVideos(response.data.videos.sort(() => 0.5 - Math.random()));
  };
  useEffect(() => {
    getCategories();
    getVideos();
  }, []);

  const categoriesList = categories.map((category) => category.categoryName);
  const mainCategories = ["All", ...new Set(categoriesList)];

  const filterVideos = (category) => {
    if (category === "All") {
      setfilteredVideos(shuffledVideos);
      return;
    } else {
      const filteredItems = shuffledVideos.filter(
        (video) => video.category === category
      );
      setfilteredVideos(filteredItems);
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
          {filteredVideos.map((video) => {
            return (
              <Link
                to={`/videos/${video._id}`}
                key={video._id}
                onClick={() => {
                  addToHistory(video);
                }}
              >
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
