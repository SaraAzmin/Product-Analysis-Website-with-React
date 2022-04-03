import React from 'react';

const Review = ({ review }) => {
    return (
        <div className='border-2 border-indigo-800 p-5'>
            <div className='flex justify-between border-b-2 border-indigo-800 pb-3 mb-3'>
                <h4 className='font-medium text-xl'>{review.name}</h4>
                <h4 className='font-bold text-xl'>{review.rating}</h4>
            </div>
            <p className='text-justify font-sans'>{review.review}</p>
        </div>
    );
};

export default Review;