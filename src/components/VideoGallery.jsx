import React from "react";
import Video from "./Video";

function VideoGallery({videos}) {
  return (
    <div className="fixed left-28 pr-8">
      <div className="h-screen flex  justify-center overflow-scroll">
        <div className="grid grid-cols-4 gap-2 gap-y-4 w-200">
            {videos.map((video, index) => {
                return <Video video={video} key={index}/>
            })}
        </div>
      </div>
    </div>
  );
}

export default VideoGallery;
