import React from 'react';

const Daylight = () => {
    return (
        <div className='bg-black'>
            <h1 className='text-5xl p-6 text-yellow-600 text-center font-bold font-serif'>Portfolio Details</h1>
            <div className='border my-4 w-100 mx-12 p-10'>
                <h1 className='text-center mb-4 text-2xl font-bold text-white'>Day-Light</h1>
                <p className='text-lg font-semibold my-2 text-white'>Features: <br />
                    1. Daylight is a professional convention center where they provides service for any occations or events. <br />
                    2. They provides various packages, like standard, premium etc. <br />
                    3. Customers can order their desire packages<br /><br />
                    Tools: Bootstrap and css</p>
                    <a className='text-white font-semibold' href="  https://github.com/Porgramming-Hero-web-course/convention-center-Abdullajkkniu/blob/main/index.html"><img className='w-10 inline' src="https://i.ibb.co/kQ14njL/download.png" alt="" /></a>

                    <a href="https://vigorous-darwin-235b2b.netlify.app/#package"><img className='w-10 border inline ml-10' src="https://i.ibb.co/PxMRcQ3/live.png" alt="" /></a>
                    
                    
            </div>
            <iframe className='responsive' style={{ width: '100%', height: '500px' }} src=" https://vigorous-darwin-235b2b.netlify.app/#package" frameborder="0"></iframe>
        </div>
    );
};

export default Daylight;