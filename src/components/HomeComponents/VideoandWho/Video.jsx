import React from 'react';
import { Player } from 'video-react';
const Video = () => {
    return (

        <div className='video_section'>
            <div className='heading'>
                <div className='design'></div>
                <h3>Watch Video</h3>
                <div className='design'></div>
            </div>
            <Player
                playsInline
                poster="../assets/images/pic1.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            ></Player>
        </div>

    );
}

export default Video;