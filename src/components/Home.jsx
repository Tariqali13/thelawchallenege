import React from 'react';
import Navbar from './Navbar';
import Slider from './HomeComponents/Slider/Slider';
import Welcome from './HomeComponents/Banners/Welcome';
import Stacks from './HomeComponents/Stacks/Stacks';
import Timer from './HomeComponents/Timer';
import VideoandWho from './HomeComponents/VideoandWho/Videoandwho';
import Banner from './HomeComponents/Banners/Banner';
import CompetitionDetailsBanner from './HomeComponents/Banners/CompetitionDetailsBanner';
import Footer from './Footer';
import NewandRules from './HomeComponents/NewsandRules';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Welcome />
            <Stacks />
            <Timer />
            <VideoandWho />
            <Banner />
            <NewandRules />
            <CompetitionDetailsBanner />
            <Footer />
        </div>
    );
}

export default Home;