import React, { useState, useEffect } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import PlaylistVideosCSS from "../PlaylistVideos/PlaylistVideos.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useAuth } from "../../contexts/authContext";
import { usePlaylist } from "../../contexts/playlistContext";
// import { usePlaylistVideos } from "../../contexts/playlistVideosContext";
function PlaylistVideos() {
  // const { playlistVideos } = usePlaylistVideos();
  const { playlists } = usePlaylist();
  console.log(playlists);
  const { playlistId } = useParams();
  console.log(playlistId);
  const currentPlaylist = playlists.find((item) => item._id === playlistId);
  console.log(currentPlaylist);
  const { videos } = currentPlaylist;
  console.log(videos);
  // const [playlist, setPlaylist] = useState({});
  // const fetchPlaylist = async () => {
  //   try {
  //     const response = await axios.get(`/api/user/playlists/${playlistId}`, {
  //       headers: { authorization: token },
  //     });
  //     setPlaylist(response.data.video);
  //   } catch (e) {
  //     console.log("error while fetching the single playlist", e);
  //   }
  // };
  // useEffect(() => {
  //   fetchPlaylist();
  //   console.log(playlist);
  // },[playlistId]);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={PlaylistVideosCSS.container}>
        <div className={PlaylistVideosCSS["list-container"]}>
          {/* {currentPlaylist && (
            <h2>
              You are getting the single playlist object, now search for it's
              own property of "videos"{" "}
            </h2>
          )} */}
          {videos?.length === 0 ? (
            <h2>It's an empty playlist, add videos this category</h2>
          ) : (
            videos?.map((video) => {
              return (
                // <Link to={`/videos/${video._id}`} key={video._id}>
                <Videocard
                  key={video._id}
                  title={video.title}
                  creator={video.creator}
                  thumbNail={video.thumbNail}
                  logo={video.creatorLogo}
                  id={video._id}
                  nonExploreCard={true}
                  playlistId={playlistId}
                  playlistCard = {true}
                />
                // </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export { PlaylistVideos };
