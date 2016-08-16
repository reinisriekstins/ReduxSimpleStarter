'use strict';
import React, { Component } from 'react';
import VideoListItem from './video_list_item';

//class VideoList extends Component {
//
//  constructor(props) {
//    super(props);
//
//    console.log(props);
//    console.log(props.videos);
//    this.state = { videos: props.videos };
//  }
//
//  render() {
//    return (
//      <ul className="col-md-4 list-group">
//        {this.state.videos.length}
//      </ul>
//    );
//  }
//
//}

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
