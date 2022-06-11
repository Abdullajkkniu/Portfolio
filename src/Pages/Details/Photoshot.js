import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Details/Photoshot.css';

const Photoshot = () => {
    return (
        <div className='bg-black'>
            <h1 className='text-5xl p-6 text-yellow-600 text-center font-bold font-serif'>Portfolio Details</h1>
            <div className='border my-4 w-100 mx-12 p-10'>
                <h1 className='text-center mb-4 text-2xl font-bold text-white'>My-PhotoShot</h1>
                <p className='text-lg font-semibold my-2 text-white'>Features: <br />
                    1. In this website, a professional photographer always ready to provide his service for any
                    occasion or events. <br />
                    2. Any client can order the photography package, if they need to get the service. <br />
                    3. For entering the website, users must log in with their email and password as well as
                    google sign in method. <br /><br />
                    Tools: React, React router, Bootstrap, Firebase, React-firebase-hooks.</p>
                    <a className='text-white font-semibold' href="https://github.com/programming-hero-web-course-4/independent-service-provider-Abdullajkkniu"><img className='w-10 inline' src="https://i.ibb.co/kQ14njL/download.png" alt="" /></a>
                    <a href="https://my-photoshot.web.app"><img className='w-10 border inline ml-10' src="https://i.ibb.co/PxMRcQ3/live.png" alt="" /></a>
                    
                    
            </div>
            <iframe className='responsive' style={{ width: '100%', height: '500px' }} src=" https://my-photoshot.web.app" frameborder="0"></iframe>
        </div>
    );
};

export default Photoshot;