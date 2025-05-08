import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>

            <div>
            <div className="join join-vertical w-full">
  <button className="btn bg-base-100 justify-start join-item"><FaFacebookF /> Facebook</button>
  <button className="btn bg-base-100 justify-start join-item"><FaXTwitter /> twitter</button>
  <button className="btn bg-base-100 justify-start join-item"><GrInstagram /> Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;