import { createContext, useContext, useReducer,useEffect } from "react";
import { playlistReducer } from "../reducers/playlistReducer";
import axios from "axios";
import { useAuth } from "./authContext";
const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const { token } = useAuth();
  const initialState = {
    playlists: [],
    isPlaylistModalOpen: false,
    playlistChecked: false,
  };
  const [state, playlistDispatch] = useReducer(playlistReducer, initialState);

  const addToPlaylist = () => {
    playlistDispatch({ type: "OPEN_MODAL" });
  };
  const getPlaylists = async () => {
    if (token) {
      try {
        const response = await axios.get("/api/user/playlists", {
          headers: { authorization: token },
        });
        playlistDispatch({
          type: "PLAYLISTS",
          payload: response.data.playlists,
        });
      } catch (e) {
        console.log("error while fetching playlists(on modal): ", e);
      }
    } else {
      playlistDispatch({ type: "PLAYLISTS", payload: [] });
    }
  };
  const closeModal = () => {
    playlistDispatch({ type: "CLOSE_MODAL" });
  };
  useEffect(() => {
    getPlaylists();
  }, [token]);
  const createPlaylist = async (title) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        {
          playlist: { title: title, description: "bar bar bar" },
        },
        {
          headers: { authorization: token },
        }
      );
      playlistDispatch({ type: "PLAYLISTS", payload: response.data.playlists });
    } catch (e) {
      console.log("error while creating new playlists(on modal): ", e);
    }
  };
  const removePlaylist = async (playlistId) => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: token },
      });
      playlistDispatch({ type: "PLAYLISTS", payload: response.data.playlists });
    } catch (e) {
      console.log("error while removing a playlists(on modal): ", e);
    }
  };

  const addToPlaylistVideos = async (video, playlistId) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        {
          video,
        },
        {
          headers: { authorization: token },
        }
      );
      playlistDispatch({
        type: "PLAYLIST_VIDEOS",
        payload: response.data.playlist,
      });
    } catch (e) {
      console.log("error during add a video to selected playlist:", e);
    }
  };
  const removeFromPlaylistVideos = async (videoId, playlistId) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        {
          headers: { authorization: token },
        }
      );
      playlistDispatch({
        type: "PLAYLIST_VIDEOS",
        payload: response.data.playlist,
      });
    } catch (e) {
      console.log("error during remove from likes:", e);
    }
  };

  return (
    <PlaylistContext.Provider
      value={{
        ...state,
        addToPlaylist,
        closeModal,
        createPlaylist,
        removePlaylist,
        addToPlaylistVideos,
        removeFromPlaylistVideos,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => {
  return useContext(PlaylistContext);
};

export { PlaylistProvider, usePlaylist };
