import { createContext, useContext, useReducer, useEffect } from "react";
import { watchlaterReducer } from "../reducers/watchlaterReducer";
import axios from "axios";
import { useAuth } from "./authContext";
const WatchlaterContext = createContext();

const WatchlaterProvider = ({ children }) => {
  const { token } = useAuth();
  // console.log(token);
  const initialState = {
    watchLater: [],
  };
  const [state, watchlaterDispatch] = useReducer(
    watchlaterReducer,
    initialState
  );
  const getWatchlater = async () => {
    if (token) {
      try {
        const response = await axios.get("/api/user/watchlater", {
          headers: { authorization: token },
        });
        watchlaterDispatch({
          type: "WATCH_LATER",
          payload: response.data.watchlater,
        });
      } catch (e) {
        console.log("error from watchlater fetching: ", e);
      }
    } else {
      watchlaterDispatch({ type: "WATCH_LATER", payload: [] });
    }
  };

  useEffect(() => {
    getWatchlater();
  }, [token]);
  const addToWatchLater = async (video) => {
    console.log(token);

    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        {
          headers: { authorization: token },
        }
      );
      watchlaterDispatch({
        type: "WATCH_LATER",
        payload: response.data.watchlater,
      });
      console.log(response, "response from post request");
    } catch (e) {
      console.log("error during add to watchlater:", e);
    }
  };
  const removeFromWatchlater = async (videoId) => {
    console.log("delete working")
    try {
      const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: { authorization: token },
      });
      watchlaterDispatch({
        type: "WATCH_LATER",
        payload: response.data.watchlater,
      });
      console.log(response, "response from delete request");
    } catch (e) {
      console.log("error during remove from watchlater:", e);
    }
  };
  return (
    <WatchlaterContext.Provider value={{ ...state, addToWatchLater,removeFromWatchlater }}>
      {children}
    </WatchlaterContext.Provider>
  );
};
const useWatchlater = () => {
  return useContext(WatchlaterContext);
};

export { WatchlaterProvider, useWatchlater };
