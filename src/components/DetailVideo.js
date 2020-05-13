import React from 'react';

function DetailVideo({video}) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    video = video.snippet
    return (
        <div className="detail">
            <iframe src={videoSrc} frameBorder="0" title={video.title}/>     
            <div className="video-body">
                <p><span className="detail-channel-title">{video.channelTitle} || </span>
                <span className="detail-video-title">{video.title}</span></p>
            </div>
        </div>
    );
}

export default DetailVideo;