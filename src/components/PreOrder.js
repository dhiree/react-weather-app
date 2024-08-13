import React, { useState } from 'react';
const PreOrder = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email) {
            setMessage('Thank you for signing up!');
            setEmail('');
        } else {
            setMessage('Please enter a valid email.');
        }
    };

    return (
        <section className="pre-order-section">
            <div className="container">
                <h2>Pre-Order Tech</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </section>
    );
};

export default PreOrder;
