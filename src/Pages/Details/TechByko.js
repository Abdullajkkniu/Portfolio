import React from 'react';

const TechByko = () => {
    return (
        <div className='bg-black'>
            <h1 className='text-5xl p-6 text-yellow-600 text-center font-bold font-serif'>Portfolio Details</h1>
            <div className='border my-4 w-100 mx-12 p-10'>
                <h1 className='text-center mb-4 text-2xl font-bold text-white'>TechByko</h1>
                <p className='text-lg font-semibold my-2 text-white'>Features: <br />
                    1. TechByko is a automobile tools manufacturing company. In this website client can order
                    automobile tools for their business. They can simply login in the website and order how
                    much they need.
                    2. Admin can manage order, product and so on . If any product paid admin can proceed to
                    shipped as well as admin can delete any order or add any product.
                    3. In the dashboard page they can see their order and pay for specific product. If paid client
                    will see paid button and TxnId . <br /><br />
                    Tools: React , React Router ,Tailwind CSS, DaisyUi, Firebase, React -Hook- Form , React-
                    Query , MongoDB ,Express js , Node js, JWT , Stripe , React-toastify .</p>
                    <a className='text-white font-semibold border' href="  https://github.com/programming-hero-web-course1/manufacturer-website-client-side-Abdullajkkniu">Client<img className='w-10 inline' src="https://i.ibb.co/kQ14njL/download.png" alt="" /></a>
                    <a className='text-white font-semibold ml-10 border' href=":https://github.com/programming-hero-web-course1/manufacturer-website-server-side-Abdullajkkniu">Server<img className='w-10 inline' src="https://i.ibb.co/kQ14njL/download.png" alt="" /></a>
                    <a href="https://techbyko.web.app/"><img className='w-10 border inline ml-10' src="https://i.ibb.co/PxMRcQ3/live.png" alt="" /></a>


            </div>
            <iframe className='responsive' style={{ width: '100%', height: '500px' }} src="https://techbyko.web.app/" frameborder="0"></iframe>
        </div>
    );
};

export default TechByko;