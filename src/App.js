import "./App.css";
import { Home } from "../src/pages/Home/Home";
import { VideoListing } from "./pages/Videolisting/VideoListing";
import { Routes, Route } from "react-router-dom";
import { Watchlater } from "./pages/Watchlater/Watchlater";
import { History } from "./pages/History/History";
import { LikedVideos } from "./pages/LikedVideos/LikedVideos";
import { Playlist } from "./pages/Playlist/Playlist";
import { PlaylistVideos } from "./pages/PlaylistVideos/PlaylistVideos";
import { Singlevideo } from "../src/pages/Singlevideo/Singlevideo";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { RequiresAuth } from "./RequiresAuth";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <Watchlater />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/likedvideos"
          element={
            <RequiresAuth>
              <LikedVideos />
            </RequiresAuth>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/videos/:videoId"
          element={
            // <RequiresAuth>
            <Singlevideo />
            // {/* </RequiresAuth> */}
          }
        />
        <Route
          path="/playlists/:playlistId"
          element={
            <RequiresAuth>
              <PlaylistVideos />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
