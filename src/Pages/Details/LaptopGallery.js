import React from 'react';

const LaptopGallery = () => {
    return (
        <div className='bg-white'>
            <h1 className='text-5xl p-6 text-yellow-600 text-center font-bold font-serif'>Portfolio Details</h1>
            <div className='border my-4 w-100 mx-12 p-10 bg-black'>
                <h1 className='text-center mb-4 text-2xl font-bold text-white'>Laptop-Gallery</h1>
                <p className='text-lg font-semibold my-2 text-white'>Features: <br />
                    1. In this website,any person can choose his laptop  in random way by clicking choose 1 button. <br />
                    2. A person can add his laptop in cart by clicking add to cart button. <br />
                    3.If customers need to delete any product that is already selected, he can delete it by clicking clear cart button. <br /><br />
                    Tools: React, React router, Bootstrap,css</p>
                    <a className='text-white font-semibold' href="   https://github.com/Programming-Hero-Web-Course4/lucky-one-Abdullajkkniu"><img className='w-10 inline' src="https://i.ibb.co/kQ14njL/download.png" alt="" /></a>

                    <a href="https://melodic-begonia-41bd91.netlify.app/"><img className='w-10 border inline ml-10' src="https://i.ibb.co/PxMRcQ3/live.png" alt="" /></a>
                    
                    
            </div>
            <iframe className='responsive' style={{ width: '100%', height: '500px' }} src=" https://melodic-begonia-41bd91.netlify.app/" frameborder="0"></iframe>
        </div>
    );
};

export default LaptopGallery;