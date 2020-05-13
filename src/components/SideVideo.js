import React from 'react';
import SingleVideo from './SingleVideo'
function SideVideo({videos, onSelect}) {
    return (
        <div className="sidebar">
            {videos.map((video, index) => <SingleVideo key={index} video={video} onSelect={onSelect}/>)}
            <hr/>
        </div>
    );
}

export default SideVideo;