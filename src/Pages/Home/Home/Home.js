import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Faq from '../Faq/Faq';
import Packeges from '../Packages/Packeges';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Packeges></Packeges>
            <ChooseUs></ChooseUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;