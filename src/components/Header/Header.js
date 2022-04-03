import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-2 py-5 md:p-7 bg-indigo-200 text-indigo-900 font-serif'>
            <nav>
                <Link className='text-lg font-medium md:font-semibold hover:text-white' to="/home">Home</Link>
                <Link className='mx-2 md:mx-10 text-lg font-medium md:font-semibold hover:text-white' to="/reviews">Reviews</Link>
                <Link className='text-lg font-medium md:font-semibold hover:text-white' to="/dashboard">Dashboard</Link>
                <Link className=' mx-2 md:mx-10 text-lg font-medium md:font-semibold hover:text-white' to="/blogs">Blogs</Link>
                <Link className='text-lg font-medium md:font-semibold hover:text-white' to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;