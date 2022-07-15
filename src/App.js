import "./App.css";
import { Home } from "../src/pages/Home/Home";
import { VideoListing } from "./pages/Videolisting/VideoListing";
import { Routes, Route } from "react-router-dom";
import { Watchlater } from "./pages/Watchlater/Watchlater";
import { History } from "./pages/History/History";
import { Playlist } from "./pages/Playlist/Playlist";
import { Singlevideo } from "../src/pages/Singlevideo/Singlevideo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/singlevideo" element={<Singlevideo />} />
      </Routes>
    </div>
  );
}

export default App;
