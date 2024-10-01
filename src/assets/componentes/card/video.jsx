import React from "react";
import "./video.css";

const video = () => {
  return (
    <div className="container-video">
      <h1>Snoopy</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7Az8BQYzUDo?si=_1Bb9xdvQLXPpaxD"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default video;
