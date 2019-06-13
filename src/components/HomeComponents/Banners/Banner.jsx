import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className='Banner'>
            <div className='Banner_main'>
                <h1>How Much Law Do You Know?</h1>
                <p>Follow our Journey from Beginning to End.</p>
                <a href='https://www.youtube.com/channel/UCpcJIbDqB-jPeGXLxfiy4qw' target="_blank" className='Link' ><button>Watch the Videos</button></a>
            </div>
        </section>
    );
}

export default Banner;