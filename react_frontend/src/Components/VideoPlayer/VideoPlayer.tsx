import React from "react";
import PropTypes from "prop-types";
import "./VideoPlayer.css";


const VideoPlayer = ({embedId}:any) => (
  <div className="video-responsive">
    <h1>Youtube</h1>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

VideoPlayer.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default VideoPlayer;