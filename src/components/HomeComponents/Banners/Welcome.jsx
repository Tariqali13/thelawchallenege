import React from 'react';
import { Link } from 'react-router-dom';



const Welcome = () => {
    return (
        <div className="Welcome">
            <h1>Welcome</h1>
            <p>The Law Challenge, Ghana is an educational quiz platform initiative aimed at strengthening the connections within, and between the legal, business community and society.  </p>
            <Link to='/About'><button>Read More</button></Link>
        </div>
    );
}

export default Welcome;