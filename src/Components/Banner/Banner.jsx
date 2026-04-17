import React from 'react';

const Banner = () => {
    return (
        <div className='mx-auto container text-center py-15'>
            <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-gray-700 my-7'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <button className='btn bg-green-900 text-white'>+ Add a Friend</button>
            <div className='flex justify-center gap-5 my-5 '>
                <div className='text-center w-40 shadow-lg py-5'>
                    <h1 className='text-xl font-bold'>9</h1>
                    <p className='mt-2'>Total Friends</p>
                </div>
                <div className='text-center w-40 shadow-lg py-5'>
                    <h1 className='text-xl font-bold'>3</h1>
                    <p className='mt-2'>On Track</p>
                </div>
                <div className='text-center w-40 shadow-lg py-5'>
                    <h1 className='text-xl font-bold'>6</h1>
                    <p className='mt-2'>Need Attention</p>
                </div>
                <div className='text-center w-40 shadow-lg py-5'>
                    <h1 className='text-xl font-bold'>12</h1>
                    <p className='mt-2'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;