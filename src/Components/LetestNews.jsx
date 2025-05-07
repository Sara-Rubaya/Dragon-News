import React from 'react';
import Marquee from 'react-fast-marquee';

const LetestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
           <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>

           <Marquee className='' pauseOnHover={true} speed={60}>
           <p className='font-bold'>Quantum Computing Breakthrough Could Redefine Data Security.  </p>
           <p className='font-bold'> Startup Ecosystem Thrives: 3 New Unicorns Born This Week.  </p>
           <p className='font-bold'> Olympics 2025: Host City Gears Up With Massive Infrastructure Overhaul.  </p>
           </Marquee>
          
        </div>
    );
};

export default LetestNews;