import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { VideoProvider } from "../src/contexts/videoContext";
import { WatchlaterProvider } from "../src/contexts/watchlaterContext";
import { HistoryProvider } from "../src/contexts/historyContext";
import { LikeProvider } from "../src/contexts/likeContext";
import { PlaylistProvider } from "../src/contexts/playlistContext";
// import { PlaylistVideosProvider } from "../src/contexts/playlistVideosContext";
// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <AuthProvider>
      <VideoProvider>
        <WatchlaterProvider>
          <HistoryProvider>
            <LikeProvider>
              <PlaylistProvider>
                {/* <PlaylistVideosProvider> */}
                  <App />
                {/* </PlaylistVideosProvider> */}
              </PlaylistProvider>
            </LikeProvider>
          </HistoryProvider>
        </WatchlaterProvider>
      </VideoProvider>
    </AuthProvider>
  </Router>
);
