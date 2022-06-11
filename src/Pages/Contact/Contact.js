import React from 'react';
import '../Contact/Contact.css';

const Contact = () => {
    return (
        <div className='bg-black'>
            <h1 className='text-5xl font-serif text-center pt-8 mb-4 text-yellow-600'>Contact me</h1>
            <hr className='w-72 mx-auto mb-8' />
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 items-center mx-auto'>
                <div className='text-white mx-auto'>
                    <h1 className='ml-2 text-3xl text-yellow-600 mb-3'>CONTACT INFO</h1>
                    <h2 className='text-2xl leading-loose'><img className='w-8 ml-2 inline' src="https://i.ibb.co/K9DmVzp/img1-removebg-preview.png"alt="" /> abdulalimjkkniu@gmail.com</h2>
                    <h3 className='text-2xl leading-loose'><img className='w-12 inline' src="https://i.ibb.co/HpCt8mn/img3-removebg-preview.png" alt="" /> +8801763550849</h3>
                    <h3 className='text-2xl leading-loose'><img className='w-10 ml-1 inline' src="https://i.ibb.co/L6LpPj6/img2-removebg-preview.png" alt="" /> Mymensingh, Bangladesh</h3>
                   


                </div>

                <form action="https://formsubmit.co/2d1935a3d290901e3c85181ca46ac412" method="POST">
                    <input type="text" name='name' placeholder="Name" class="border-set w-full text-white  h-16 m-4 p-4 pl-1 max-w-sm block mx-auto" required />
                    <input type="email" name='email' placeholder="Email" class="border-set w-full max-w-sm h-16 m-4 p-4 pl-1 block mx-auto" required />
                    <input type="text" name='subject' placeholder="subject" class="pl-1 p-4 border-set w-full max-w-sm h-16 m-4 block mx-auto" required />
                    <textarea class="text-white p-4 pl-1 area-set block mx-auto w-full max-w-sm mb-4 h-16" placeholder="Your text" name='Message' required></textarea>
                    <button className='btn-set border mx-auto block w-full max-w-sm text-white mb-4' type="Submit">Send <img className='w-10 me-0 inline' src="https://i.ibb.co/ZfsbXJb/send-removebg-preview.png" alt="" /></button>
                </form>
            </div>
        </div>
    );
};

export default Contact;