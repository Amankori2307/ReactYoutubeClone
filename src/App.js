import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import SideVideo from './components/SideVideo'
import DetailVideo from './components/DetailVideo';

function App(props) {    
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        onSubmit('trending songs');
    },[]);

    const onSubmit = (searchTerm) => {


        axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{
                key:"YOUR_API_KEY",
                part:'snippet',
                maxResults:'11',
                q : searchTerm
            }
        })
        .then( res => {
            setVideos(res.data.items.slice(1,))
            setSelectedVideo(res.data.items[0]);
            setLoading(false);
        })
    }

    const onSelect = (video) => {
        setSelectedVideo(video);
    }

    return (

        <div>
            {loading?        
                <div className="preloader">
                    <img src="/ReactYoutubeClone/preloader.gif"alt="preloader"/>
                </div>:
                <>
                    <Search onSubmit={onSubmit}/>        
                    <div className="main">
                        <DetailVideo video={selectedVideo} />
                        <SideVideo videos={videos} onSelect={onSelect}/>
                    </div>
                </>}
        </div>
    );
}

export default App;

// Add functionality like watch later
