import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className='Banner'>
            <div className='Banner_main'>
                <h1>How Much Law Do You Know?</h1>
                <p>Follow our Journey from Beginning to End.</p>
                <Link to='#' className='Link' ><button>Watch the Videos</button></Link>
            </div>
        </section>
    );
}

export default Banner;