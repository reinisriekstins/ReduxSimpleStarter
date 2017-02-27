'use strict';
import React, { Component } from 'react';

export default ({video}) => {
  if (!video) {
    return ( <div>Loading...</div> );
  }

  const { videoId } = video.id;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
          className="embed-responsive-item">
        </iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}
