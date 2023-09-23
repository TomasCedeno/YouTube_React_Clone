import React from "react";
import CategorySlider from "../components/CategorySlider";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import VideoGallery from "../components/VideoGallery";

import {videos, categories} from "../util/data.js";

function Home() {
  return (
    <div className="home" data-theme="light">
      <Navbar />
      <CategorySlider categories={categories} />
      <VideoGallery videos={videos}/>
      <SideMenu />
    </div>
  );
}

export default Home;
