import React, { useEffect, useState } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import { HorizontalCard } from "../HorizontalCard/Horizontalcard";
import { AiOutlineLike, AiOutlineDislike, AiFillLike } from "react-icons/ai";
import { MdWatchLater, MdOutlinePlaylistPlay } from "react-icons/md";
import SinglevideoCSS from "../../pages/Singlevideo/Singlevideo.module.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useVideo } from "../../contexts/videoContext";
import { useAuth } from "../../contexts/authContext";
import ReactPlayer from "react-player";
import axios from "axios";
import { useWatchlater } from "../../contexts/watchlaterContext";
import { useLikes } from "../../contexts/likeContext";
import { usePlaylist } from "../../contexts/playlistContext";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";
function Singlevideo() {
  const { playlists, addToPlaylist, isPlaylistModalOpen } = usePlaylist();
  const navigate = useNavigate();
  const { addToWatchLater } = useWatchlater();
  const { addToLikedVideos } = useLikes();
  const { token } = useAuth();
  const { videoList } = useVideo();
  console.log(videoList);
  const shuffledVideos = videoList?.sort(() => 0.5 - Math.random());
  const { videoId } = useParams();
  let suggestedVideos = shuffledVideos
    .filter((video) => video._id !== videoId)
    .slice(0, 9);
  const [video, setVideo] = useState({});

  const fetchVideo = async () => {
    try {
      const response = await axios.get(`/api/video/${videoId}`);
      setVideo(response.data.video);
    } catch (e) {
      console.log("error while fetching the SingleVideo", e);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, [videoId]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      {isPlaylistModalOpen && (
        <PlaylistModal playlists={playlists} video={video} />
      )}
      <div className={SinglevideoCSS["container"]}>
        <div className={SinglevideoCSS["video-detail-container"]}>
          <div className={SinglevideoCSS["video-section"]}>
            <div className={SinglevideoCSS["player-wrapper"]}>
              <ReactPlayer
                controls
                className={SinglevideoCSS["react-player"]}
                url={`https://www.youtube.com/watch?v=${video._id}`}
                playing={true}
                width="100%"
                height="100%"
              />
            </div>

            <div className={SinglevideoCSS["play-video-info"]}>
              <div className={SinglevideoCSS["tags-title-stats"]}>
                <div className={SinglevideoCSS.tags}>
                  <p>#Hollywood</p>
                  <p>#Bollywood</p>
                  <p>#Tollywood</p>
                  <p>#Kollywood</p>
                </div>
                <div className={SinglevideoCSS["title-stats"]}>
                  <h3 className={SinglevideoCSS["video-title"]}>
                    {video.title}
                  </h3>
                  <p>1223 Views &bull; 2 Days ago</p>
                </div>
              </div>
              <div className={SinglevideoCSS.icons}>
                <p
                  onClick={() => {
                    if (token) {
                      addToWatchLater(video);
                    } else {
                      navigate("/signin");
                    }
                  }}
                >
                  Add to Watchlater{" "}
                  <MdWatchLater
                    className={SinglevideoCSS["watch-later-icon"]}
                  />
                </p>
                <p
                  onClick={() => {
                    if (token) {
                      addToPlaylist();
                    } else {
                      navigate("/signin");
                    }
                  }}
                >
                  Add To Playlist{" "}
                  <MdOutlinePlaylistPlay
                    className={SinglevideoCSS["add-playlist-icon"]}
                  />{" "}
                </p>
                {/* <a href="_blank"> */}
                <p
                  onClick={() => {
                    addToLikedVideos(video);
                  }}
                >
                  Like <AiFillLike />
                </p>
                {/* </a> */}
              </div>
            </div>
            <hr />
            <div className={SinglevideoCSS.publisher}>
              <img src={video.creatorLogo} alt="" />
              <div>
                <h2>{video.creator}</h2>
                <span>400k Subscribers</span>
              </div>
              <button type="button">Subscribe</button>
            </div>

            <div className={SinglevideoCSS["vid-description"]}>
              <p>
                Channel That makes you feel special by watching it's content
              </p>
              <p>Suscribe For more!</p>
              <hr />
              <h4>222 Comments</h4>
              <div className={SinglevideoCSS["add-comment"]}>
                <img src="https://i.pravatar.cc/300" alt="" />
                <input type="text" placeholder="Comment..." />
              </div>
              <div className={SinglevideoCSS["old-comment"]}>
                <img src="https://i.pravatar.cc/300" alt="" />
                <div>
                  <h3>
                    Cameron <p>2 Days ago</p>
                  </h3>
                  <p>
                    gewrognrajgndg aoiddgnjadgang Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Explicabo, ut!
                  </p>
                  <div className={SinglevideoCSS["acomment-action"]}>
                    <AiOutlineLike /> <p>244</p>
                    <AiOutlineDislike /> <p>2</p>
                    <p>REPLY</p>
                  </div>
                </div>
              </div>

              <div className={SinglevideoCSS["old-comment"]}>
                <img src="https://i.pravatar.cc/300" alt="" />
                <div>
                  <h3>
                    Cameron <p>2 Days ago</p>
                  </h3>
                  <p>
                    gewrognrajgndg aoiddgnjadgang Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Explicabo, ut!
                  </p>
                  <div className={SinglevideoCSS["acomment-action"]}>
                    <AiOutlineLike /> <p>244</p>
                    <AiOutlineDislike /> <p>2</p>
                    <p>REPLY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={SinglevideoCSS["list-container"]}>
          {suggestedVideos.map((video) => {
            return (
              <Link to={`/videos/${video._id}`} key={video._id}>
                <HorizontalCard
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

export { Singlevideo };
