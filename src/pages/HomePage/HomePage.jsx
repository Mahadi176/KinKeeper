import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Friends from './Friends';

const HomePage = () => {
    return (
        <div className='min-h-screen'>
            
            <Banner/>
            <Friends/>
        </div>
    );
};

export default HomePage;