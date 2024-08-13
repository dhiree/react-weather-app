import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Search from '../components/Search';
import PreOrder from '../components/PreOrder';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Features />
            <Search />
            <PreOrder />
            <Footer />
        </div>
    );
};

export default LandingPage;
