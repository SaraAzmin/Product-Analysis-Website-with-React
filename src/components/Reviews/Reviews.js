import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useReviews([]);

    return (
        <div className='mx-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-10'>
                {

                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;