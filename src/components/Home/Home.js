import React from 'react';
import CustomerReviewSection from '../CustomerReviewSection/CustomerReviewSection';
import IntroductionSection from '../IntroductionSection/IntroductionSection';

const Home = () => {
    return (
        <div>
            <div className='bg-indigo-50'>
                <IntroductionSection></IntroductionSection>
            </div>
            <CustomerReviewSection></CustomerReviewSection>
        </div>
    );
};

export default Home;