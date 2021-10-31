import React from 'react';
import Locations from './Locations/Locations';
import OurClients from './OurClients/OurClients';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <OurClients></OurClients>
            <Locations></Locations>
        </div>
    );
};

export default Home;