import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const response = await axios.get("/api/videos");
    const videos = await response.data.videos;
    setVideos(videos);
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <VideoContext.Provider value={{ videos }}>{children}</VideoContext.Provider>
  );
};

const useVideo = () => {
  return useContext(VideoContext);
};

export { VideoProvider, useVideo };
