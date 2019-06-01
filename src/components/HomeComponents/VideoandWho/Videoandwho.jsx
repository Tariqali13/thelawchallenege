import React from 'react';
import Video from './Video';
import Whoweare from './Whoweare';
const VideoandWho = () => {
    return (
        <div>
            <section className='Video_main'>
                <div className='Divider'>

                    <Video />
                    <Whoweare />
                </div>
            </section>
        </div>
    );
}

export default VideoandWho;