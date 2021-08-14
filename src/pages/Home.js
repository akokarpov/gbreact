
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h2>Home page</h2>
            <div>
                <Link to="/login">Sign In</Link>
            </div>
            <div>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Home;