'use strict';
import React, { Component } from 'react';

//class VideoListItem extends Component {
//  constructor (props) {
//    super(props);
//
//    this.state = {
//      video: props.video,
//      imageUrl: this.state.video.snippet.thumbnails.default.url
//    };
//    //console.log(this.state.video);
//  }
//
//  render () {
//    return (
//      <li onClick={() => onVideoSelect(this.state.video)} className="list-group-item">
//        <div className="video-list media">
//
//          <div className="media-left">
//            <img className="media-object" src={this.state.imageUrl} />
//          </div>
//
//          <div className="media-body">
//            <div className="media-heading">{this.state.video.snippet.title}</div>
//          </div>
//
//        </div>
//      </li>
//    );
//  }
//}

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;


  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
