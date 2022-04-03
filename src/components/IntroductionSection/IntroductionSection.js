import React from 'react';
import Pic from '../../images/pic.png';

const IntroductionSection = () => {
    return (
        <div className='flex mx-20 items-center py-12'>
            <div className='w-3/5 flex items-start flex-col'>
                <h1 className='text-5xl font-semibold font-serif'>Leave <span className='text-indigo-800'>Paper</span> Behind</h1>
                <h1 className='text-5xl font-semibold my-5 font-serif'>Enjoy Your <span className='text-indigo-800'>Studies</span></h1>
                <p className='text-ellipsis text-left mr-14 font-normal font-sans my-3'>Take beautiful, searchable handwritten notes with the note-taking app that turns your iPad into digital paper. Effortlessly write out equations, draw mind maps, mark up PDFs and more. Handwrite all over the page and experience limitless note-taking on the iPad.</p>
                <button className='bg-indigo-800 rounded-md text-white p-4 hover:bg-indigo-400 hover:font-medium'>Let's have a Look</button>
            </div>
            <div className='w-2/5'>
                <img className='w-4/5' src={Pic} alt="" />

            </div>
        </div>
    );
};

export default IntroductionSection; <h1>this is intro</h1>