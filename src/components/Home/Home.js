import React from 'react';
import CustomerReviewSection from '../CustomerReviewSection/CustomerReviewSection';
import IntroductionSection from '../IntroductionSection/IntroductionSection';
import WhatISContextAPI from '../WhatISContextAPI/WhatISContextAPI';

const Home = () => {
    return (
        <div>
            <div className='bg-indigo-50'>
                <IntroductionSection></IntroductionSection>
            </div>
            <CustomerReviewSection></CustomerReviewSection>
            <WhatISContextAPI></WhatISContextAPI>
        </div>
    );
};

export default Home;