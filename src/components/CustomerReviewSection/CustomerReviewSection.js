import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const CustomerReviewSection = () => {

    const [reviews, setReviews] = useReviews([]);

    const threeReviews = reviews.slice(0, 3);

    return (
        <div className='mx-20'>
            <h2 className='text-4xl pt-10 font-semibold'>Customer Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-10'>
                {

                    threeReviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
            <Link to="/reviews">
                <button className='bg-indigo-800 text-white py-4 px-8 mb-10 rounded-lg hover:bg-indigo-400 font-semibold'>See All Reviews</button>

            </Link>

        </div>
    );
};

export default CustomerReviewSection;