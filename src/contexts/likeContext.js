import { createContext, useContext, useReducer, useEffect } from "react";
import { likeReducer } from "../reducers/likeReducer";
import axios from "axios";
import { useAuth } from "./authContext";
const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const { token } = useAuth();
  // console.log(token);
  const initialState = {
    likedVideos: [],
  };

  const [state, likeDispatch] = useReducer(likeReducer, initialState);
  const getLikedVideos = async () => {
    if (token) {
      try {
        const response = await axios.get("/api/user/likes", {
          headers: { authorization: token },
        });
        // console.log(response.data.likes);
        likeDispatch({
          type: "LIKED_VIDEOS",
          payload: response.data.likes,
        });
      } catch (e) {
        console.log("error from liked videos fetching: ", e);
      }
    } else {
      likeDispatch({ type: "LIKED_VIDEOS", payload: [] });
    }
  };

  useEffect(() => {
    getLikedVideos();
  }, [token]);
  const addToLikedVideos = async (video) => {
    console.log(token);
    console.log("hi from add to likes");
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: { authorization: token },
        }
      );
      likeDispatch({
        type: "LIKED_VIDEOS",
        payload: response.data.likes,
      });
      console.log(response, "response from post request");
    } catch (e) {
      console.log("error during add to likes:", e);
    }
  };
  const removeFromLikedVideos = async (videoId) => {
    console.log("delete working");
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: { authorization: token },
      });
      likeDispatch({
        type: "LIKED_VIDEOS",
        payload: response.data.likes,
      });
      console.log(response, "response from delete request");
    } catch (e) {
      console.log("error during remove from likes:", e);
    }
  };

  return (
    <LikeContext.Provider
      value={{ ...state, addToLikedVideos, removeFromLikedVideos }}
    >
      {children}
    </LikeContext.Provider>
  );
};
const useLikes = () => {
  return useContext(LikeContext);
};

export { LikeProvider, useLikes };
