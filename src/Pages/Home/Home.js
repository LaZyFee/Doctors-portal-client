import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import MakeAppointment from './MakeAppointment';
import Service from './Service';
import Testimonials from './Testimonials';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Service />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;