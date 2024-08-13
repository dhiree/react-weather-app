import React from 'react';
import { FaBrain, FaMicrophone, FaHome } from 'react-icons/fa';

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2>Ai Features here </h2>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <FaBrain size={50} />
                        <h3>AI-Powered</h3>
                        <p>Smart AI to assist with daily tasks.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <FaMicrophone size={50} />
                        <h3>Voice Control</h3>
                        <p>Hands-free operation with voice commands.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <FaHome size={50} />
                        <h3>Smart Integration</h3>
                        <p>Seamlessly integrates with smart home devices.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
