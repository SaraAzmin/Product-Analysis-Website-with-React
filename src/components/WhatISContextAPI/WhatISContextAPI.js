import React from 'react';

const WhatISContextAPI = () => {
    return (
        <div className='mx-10 md:mx-20 mb-5 md:mb-10'>
            <h4 className='text-2xl font-semibold'>What is Context API?</h4>
            <p className='md:px-20 text-justify my-5'>In general, when we want to send a prop from a component to another component multiple level lower than that. We have to send the prop step by step all the way through every component. This is prop drilling which is not a secure way of passing data. Context API solves this problem and lets us avoid prop drilling. One can simply create a context in the component from where they want to send. After that use the context in the component needed. </p>
        </div>
    );
};

export default WhatISContextAPI;