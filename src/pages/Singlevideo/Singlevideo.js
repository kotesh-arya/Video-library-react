import React from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import SinglevideoCSS from "../../pages/Singlevideo/Singlevideo.module.css";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import ReactPlayer from "react-player";
import { useVideo } from "../../contexts/videoContext";
import { useParams, Link } from "react-router-dom";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
// import { IoIosShareAlt, IoIosSave } from "react-icons/io";

function Singlevideo() {
  const { videos } = useVideo();
  console.log(videos);
  const { videoId } = useParams();
  console.log(videoId);
  let suggestedVideos = videos.slice(12);
  const detaileVideo = videos.find((video) => {
    console.log(video.id, video.category);
    return video.id === videoId;
  });
  const mapped = videos.map((video) => {
    return video.id;
  });
  // console.log(detaileVideo);
  console.log(mapped);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={SinglevideoCSS["container"]}>
        <div className={SinglevideoCSS["video-detail-container"]}>
          <div className={SinglevideoCSS["video-section"]}>
            <div className={SinglevideoCSS["player-wrapper"]}>
              <ReactPlayer
                controls
                className={SinglevideoCSS["react-player"]}
                url={detaileVideo.source}
                autoPlay={true}
                width="100%"
                height="100%"
              />
            </div>
            <div className={SinglevideoCSS.tags}>
              <a href="_blank">#Hollywood</a>
              <a href="_blank">#Bollywood</a>
              <a href="_blank">#Tollywood</a>
              <a href="_blank">#Kollywood</a>
            </div>
            <h3 className={SinglevideoCSS["video-title"]}>
              {detaileVideo.title}
            </h3>

            <div className={SinglevideoCSS["play-video-info"]}>
              <p>1223 Views &bull; 2 Days ago</p>
              <div>
                <a href="_blank">
                  <p>Like The Video</p> <AiFillLike />
                  {/* <AiOutlineLike />
                  125 */}
                </a>
                {/* <a href="_blank">
                  <AiOutlineDislike />
                  125
                </a> */}
                {/* <a href="_blank">
                  <IoIosShareAlt />
                  125
                </a> */}
                {/* <a href="_blank">
                  <IoIosSave />
                  125
                </a> */}
              </div>
            </div>
            <hr />
            <div className={SinglevideoCSS.publisher}>
              <img src={detaileVideo.creatorLogo} alt="" />
              <div>
                <h2>{detaileVideo.creator}</h2>
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
                <Videocard
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
