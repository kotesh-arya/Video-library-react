import React from "react";
import { Banner } from "../Home/HomePageComponents/Banner/Banner";
import { Trending } from "./HomePageComponents/Trending/Trending";
import { Footer } from "./HomePageComponents/Footer/Footer";
import "../Home/Home.css";
function Home() {
  return (
    <div>
      <Banner />
      <Trending />
      <Footer />
    </div>
  );
}

export { Home };
