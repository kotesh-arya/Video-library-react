import React, { useState, useEffect } from "react";
import { Navbar } from "../Videolisting/Navbar/Navbar";
import { Sidebar } from "../Videolisting/Sidebar/Sidebar";
import HistoryCSS from "../History/History.module.css";
import { Videocard } from "../Videolisting/Videocard/Videocard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "../../contexts/historyContext";
function History() {
  const { history, clearHistory } = useHistory();
  history.reverse();
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={HistoryCSS.container}>
        {history?.length !== 0 && (
          <button
            onClick={clearHistory}
            className={HistoryCSS["clear-history-btn"]}
          >
            Clear History
          </button>
        )}
        <div className={HistoryCSS["list-container"]}>
          {history?.length === 0 ? (
            <h2>History is empty, go watch and have fun!</h2>
          ) : (
            history?.map((video) => {
              return (
                <Videocard
                  key={video._id}
                  title={video.title}
                  creator={video.creator}
                  thumbNail={video.thumbNail}
                  logo={video.creatorLogo}
                  id={video._id}
                  nonExploreCard={true}
                  historyCard={true}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export { History };
