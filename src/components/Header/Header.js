import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-7 mb-10 bg-indigo-400 text-white font-serif'>
            <nav>
                <Link className='text-lg font-semibold' to="/home">Home</Link>
                <Link className='mx-8 text-lg font-semibold' to="/reviews">Reviews</Link>
                <Link className='text-lg font-semibold' to="/dashboard">Dashboard</Link>
                <Link className='mx-8 text-lg font-semibold' to="/blogs">Blogs</Link>
                <Link className='text-lg font-semibold' to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;