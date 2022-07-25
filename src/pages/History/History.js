import React, {useState,useEffect} from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import HistoryCSS from "../History/History.module.css";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import { Link } from "react-router-dom";
import axios from "axios";
function History() {
  const [videoHistory, setVideoHistory] = useState([]);
  const encodedToken = localStorage.getItem("JWT_TOKEN");
  const getVideoHistory = async () => {
    const response = await axios.get("/api/user/history", {
      headers: {
        authorization: encodedToken,
      },
    });
    // console.log(response.data);
    setVideoHistory(response.data.history);
  };
  useEffect(() => {
    getVideoHistory();
  }, []);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={HistoryCSS.container}>
        <div className={HistoryCSS["list-container"]}>
          {videoHistory.map((video) => {
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

export { History };
