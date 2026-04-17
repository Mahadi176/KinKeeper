import React from 'react';
import facebook from '/assets/facebook.png';
import instagram from '/assets/instagram.png';
import twitter from '/assets/twitter.png';

const Footer = () => {
    return (
        <div className='bg-green-900 mx-auto text-center py-10 '>
          <div className='space-y-5'>
             <h1 className='text-5xl text-white'><span className='font-bold'>Keen</span>Keeper</h1>
           <p className='text-white
           '>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          </div>
           <div className='space-y-5 mt-5'>
            <h3 className='text-xl font-bold text-white'>Social Links</h3>
            <div className='flex justify-center gap-2'>
                <div className='w-8'><img src={instagram} alt="ab" /></div>
                <div className='w-8'><img src={facebook} alt="cb" /></div>
                <div className='w-8'><img src={twitter} alt="bb" /></div>
            </div>
           </div>
           <div className='flex h-[0.5px] bg-base-300 my-10 max-w-7xl mx-auto'></div>
           <div className='md:flex justify-around'>
            <div className='text-white'>
                © 2026 KeenKeeper. All rights reserved.
            </div>
            <div className='flex justify-between text-white'>
                <div>Privacy Policy</div>
                <div> Terms of Service </div>
                <div> Cookies</div>
            </div>
           </div>
        </div>
    );
};

export default Footer;