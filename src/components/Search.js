import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => setTestimonials(response.data.slice(0, 3)))
            .catch(error => console.error('Error fetching testimonials:', error));
    }, []);

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2>What Our Users Say</h2>
                <div className="row">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="col-md-4">
                            <blockquote>
                                <p>"{testimonial.body}"</p>
                                <footer>- {testimonial.name}</footer>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Search;
