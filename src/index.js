import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { VideoProvider } from "../src/contexts/videoContext";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <AuthProvider>
      <VideoProvider>
        <App />
      </VideoProvider>
    </AuthProvider>
  </Router>,

  document.getElementById("root")
);
