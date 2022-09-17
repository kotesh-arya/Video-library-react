import React, { useState } from "react";
import { usePlaylist } from "../../contexts/playlistContext";
import playlistModalCSS from "../PlaylistModal/playlistModal.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { usePlaylistVideos } from "../../contexts/playlistVideosContext";
function PlaylistModal({ playlists, video }) {
  const { closeModal, createPlaylist, removePlaylist,addToPlaylistVideos, removeFromPlaylistVideos } = usePlaylist();
  // const {  } = usePlaylistVideos();
  const [playlistTitle, setPlaylistTitle] = useState("");
  // const [playlist, setPlaylist] = useState([]);
  // const handleTask = () => {
  //   setPlaylist((prevtask) => [...prevtask, text]);
  //   setText("");
  // };

  // const handleDelete = (playlistFromBtn) => {
  //   const filteredPlaylist = playlist.filter(
  //     (task) => task !== playlistFromBtn
  //   );
  //   setPlaylist(filteredPlaylist);
  // };
  return (
    <div
      // onClick={() => {
      //   closeModal();
      // }}
      className={playlistModalCSS["modal-container"]}
    >
      <div className={playlistModalCSS.modal}>
        <AiOutlineCloseCircle
          className={playlistModalCSS["close-icon"]}
          onClick={() => {
            closeModal();
          }}
        />
        <h1>PLAYLIST</h1>
        <input
          placeholder="Type playlist name..."
          type="text"
          value={playlistTitle}
          onChange={(e) => {
            setPlaylistTitle(e.target.value);
          }}
        />
        <button
          onClick={() => {
            createPlaylist(playlistTitle);
            setPlaylistTitle("");
          }}
        >
          Create
        </button>
        {playlists.map((playlist) => {
          console.log(playlist._id);
          return (
            <p key={playlist._id}>
              <input
                type="checkbox"
                onChange={(e) => {
                  e.target.checked
                    ? addToPlaylistVideos(video, playlist._id)
                    : removeFromPlaylistVideos(video.id, playlist._id);
                }}
                checked={playlist.videos.find((v) =>
                  v.id === video.id ? true : false
                )}
              />
              {playlist.title}
              <button
                onClick={() => {
                  removePlaylist(playlist.id);
                }}
              >
                DELETE
              </button>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export { PlaylistModal };
