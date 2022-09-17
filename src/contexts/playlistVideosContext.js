// import { createContext, useContext, useReducer, useEffect } from "react";

// import { playlistVideosReducer } from "../reducers/playlistVideosReducer";
// import axios from "axios";
// import { useAuth } from "./authContext";
// const PlaylistVideosContext = createContext();

// const PlaylistVideosProvider = ({ children }) => {
//   const { token } = useAuth();
//   // console.log(token);
//   const initialState = {
//     playlistVideos: [],
//   };

//   const [state, playlistVideosDispatch] = useReducer(
//     playlistVideosReducer,
//     initialState
//   );
//   // const getPlaylistVideos = async () => {
//   //   if (token) {
//   //     try {
//   //       const response = await axios.get("/api/user/likes", {
//   //         headers: { authorization: token },
//   //       });
//   //       // console.log(response.data.likes);
//   //       playlistVideosDispatch({
//   //         type: "PLAYLIST_VIDEOS",
//   //         payload: response.data.likes,
//   //       });
//   //     } catch (e) {
//   //       console.log("error from liked videos fetching: ", e);
//   //     }
//   //   } else {
//   //     playlistVideosDispatch({ type: "PLAYLIST_VIDEOS", payload: [] });
//   //   }
//   // };

//   // useEffect(() => {
//   //   getLikedVideos();
//   // }, [token]);
//   const addToPlaylistVideos = async (video, playlistId) => {
//     // console.log(token);
//     // console.log("hi from add to likes");
//     try {
//       const response = await axios.post(
//         `/api/user/playlists/${playlistId}`,
//         {
//           video,
//         },
//         {
//           headers: { authorization: token },
//         }
//       );
//       playlistVideosDispatch({
//         type: "PLAYLIST_VIDEOS",
//         payload: response.data.playlist,
//       });
//       console.log(response, "response from sample add to playlist request");
//     } catch (e) {
//       console.log("error during add a video to selected playlist:", e);
//     }
//   };
//   const removeFromPlaylistVideos = async (videoId, playlistId) => {
//     console.log("delete working");
//     try {
//       const response = await axios.delete(
//         `/api/user/playlists/${playlistId}/${videoId}`,
//         {
//           headers: { authorization: token },
//         }
//       );
//       playlistVideosDispatch({
//         type: "PLAYLIST_VIDEOS",
//         // payload: response.data.likes,
//       });
//       console.log(response, "response from delete request");
//     } catch (e) {
//       console.log("error during remove from likes:", e);
//     }
//   };

//   return (
//     <PlaylistVideosContext.Provider
//       value={{ ...state, addToPlaylistVideos, removeFromPlaylistVideos }}
//     >
//       {children}
//     </PlaylistVideosContext.Provider>
//   );
// };
// const usePlaylistVideos = () => {
//   return useContext(PlaylistVideosContext);
// };

// export { PlaylistVideosProvider, usePlaylistVideos };
