import React from 'react';
import {Link} from 'react-router-dom';

const CompetitionDetailsBanner = () => {
    return (
        <section className='Banner2'>
            <div className='Banner_main'>
                <h1>Need to Know More About the Competition?</h1>
                <p></p>
                <Link to='/CompetitionDetails' className='Link' ><button>Learn More</button></Link>
            </div>
        </section>

    );
}

export default CompetitionDetailsBanner;