import { createContext, useContext, useReducer, useEffect } from "react";
import { historyReducer } from "../reducers/historyReducer";
import axios from "axios";
import { useAuth } from "./authContext";
const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const { token } = useAuth();
  const initialState = {
    history: [],
  };

  const [state, historyDispatch] = useReducer(historyReducer, initialState);
  const getHistory = async () => {
    if (token) {
      try {
        const response = await axios.get("/api/user/history", {
          headers: { authorization: token },
        });
        historyDispatch({
          type: "HISTORY",
          payload: response.data.history,
        });
      } catch (e) {
        console.log("error from watchlater fetching: ", e);
      }
    } else {
      historyDispatch({ type: "HISTORY", payload: [] });
    }
  };

  useEffect(() => {
    getHistory();
  }, [token]);
  const addToHistory = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: { authorization: token },
        }
      );
      historyDispatch({
        type: "HISTORY",
        payload: response.data.history,
      });
    } catch (e) {
      console.log("error during add to history:", e);
    }
  };
  const removeFromHistory = async (videoId) => {
    try {
      const response = await axios.delete(`/api/user/history/${videoId}`, {
        headers: { authorization: token },
      });
      historyDispatch({
        type: "HISTORY",
        payload: response.data.history,
      });
      console.log(response, "response from delete request");
    } catch (e) {
      console.log("error during remove from history:", e);
    }
  };
  const clearHistory = async () => {
    try {
      const response = await axios.delete("/api/user/history/all", {
        headers: { authorization: token },
      });
      historyDispatch({
        type: "HISTORY",
        payload: response.data.history,
      });
    } catch (e) {
      console.log("error during clearing all history:", e);
    }
  };
  return (
    <HistoryContext.Provider
      value={{ ...state, addToHistory, removeFromHistory, clearHistory }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
const useHistory = () => {
  return useContext(HistoryContext);
};

export { HistoryProvider, useHistory };
