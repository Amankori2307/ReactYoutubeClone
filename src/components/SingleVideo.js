import React from 'react';

function SingleVideo({video, onSelect}) {
    const orgVideo = video
    video = video.snippet
    return (
        <>
        <hr/>
        <div className="item" onClick={() => onSelect(orgVideo)}>
            <img src={video.thumbnails.default.url} className="item-img" alt="thumbnail"/>
            <div className="item-text">
                <p className="video-title truncate">{video.title}</p>
                <p className="channel-title">{video.channelTitle}</p>
            </div>
        </div>
        </>
    );
}

export default SingleVideo;