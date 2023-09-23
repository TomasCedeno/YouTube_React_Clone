import React, { useState } from "react";
import CategorySlider from "../components/CategorySlider";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import VideoGallery from "../components/VideoGallery";

import {videos, categories} from "../util/data.js";

function Home() {
  const [theme, setTheme] = useState("light")


  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else setTheme("light")
  }


  return (
    <div className="home" data-theme={theme}>
      <Navbar toggleTheme={toggleTheme}/>
      <CategorySlider categories={categories} />
      <VideoGallery videos={videos}/>
      <SideMenu />
    </div>
  );
}

export default Home;
