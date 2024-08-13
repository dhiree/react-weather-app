import React from 'react';
import Weather from './Weather';

const Header = () => {
    return (
        <header className="hero-section">
            <div className="container text-center">
                <h1>Welcome to My App</h1>
                <p> Weather App.</p>
                <Weather />
            </div>
        </header>
    );
};

export default Header;
