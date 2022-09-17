import { useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import { videoReducer } from "../reducers/videoReducer";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const initialState = {
    videoList: [],
    isLoading: false,
    singleVideo: {},
  };

  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  const getVideos = async () => {
    const response = await axios.get("/api/videos");
    videoDispatch({
      type: "UPDATE_VIDEOS",
      payload: response.data.videos,
    });
  };
  useEffect(() => {
    getVideos();
  }, []);
  const someFunctionThatWillBeSentIntoAppFromTheCurrentContext = () => {
    // return some operation that has to be done...
  };
  return (
    <VideoContext.Provider value={{ ...videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => {
  return useContext(VideoContext);
};

export { VideoProvider, useVideo };
