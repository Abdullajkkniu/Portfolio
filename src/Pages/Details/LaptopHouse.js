import React from 'react';

const LaptopHouse = () => {
    return (
        <div className='bg-white'>
            <h1 className='text-5xl p-6 text-yellow-600 text-center font-bold font-serif'>Portfolio Details</h1>
            <div className='border my-4 w-100 mx-12 p-10 bg-black'>
                <h1 className='text-center mb-4 text-2xl font-bold text-white'>Laptop House</h1>
                <p className='text-lg font-semibold my-2 text-white'>Features: <br />
                    1. Laptop House is a website where customers can provides their own reviews for their purchasing laptops. <br />
                    2. Company shows their profitabilty with graph chart. <br />
                    3. There have a blog section where i have provided some web related blogs.
                    <br /><br />
                    Tools: React, React router,hooks, Bootstrap </p>
                    <a className='text-white font-semibold' href=" https://github.com/programming-hero-web-course-4/product-analysis-website-Abdullajkkniu"><img className='w-10 inline' src="https://i.ibb.co/kQ14njL/download.png" alt="" /></a>
                    <a href=" https://heartfelt-starship-6aa276.netlify.app/"><img className='w-10 border inline ml-10' src="https://i.ibb.co/PxMRcQ3/live.png" alt="" /></a>
                    
                    
            </div>
            <iframe className='responsive' style={{ width: '100%', height: '500px' }} src=" https://heartfelt-starship-6aa276.netlify.app/" frameborder="0"></iframe>
        </div>
    );
};

export default LaptopHouse;