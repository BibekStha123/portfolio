import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <h2>Welcome to this site...</h2>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Home;