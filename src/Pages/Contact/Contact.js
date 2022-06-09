import React from 'react';

const Contact = () => {
    return (
        <div className='bg-black'>
            <h1 className='text-5xl font-serif text-center py-8 text-white'>Contact me</h1>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 items-center mx-auto'>
                <div className='text-white mx-auto'>
                    <h1 className='ml-0 text-3xl'>CONTACT INFO</h1>
                    <h2 className=' text-2xl'>abdulalimjkkniu@gmail.com</h2>
                    <h3 className='text-2xl'>+8801763550849</h3>
                    <h3 className='text-2xl'>Mymensingh, Bangladesh</h3>

                </div>

                <form action="https://formsubmit.co/2d1935a3d290901e3c85181ca46ac412" method="POST">
                    <input type="text" name='name' placeholder="Name" class="input w-full  h-16 m-4 max-w-sm block mx-auto" />
                    <input type="email" name='email' placeholder="Email" class="input w-full max-w-sm h-16 m-4 block mx-auto" />
                    <input type="text" name='phone' placeholder="Phone" class="input w-full max-w-sm h-16 m-4 block mx-auto" />
                    <textarea class="textarea block mx-auto w-full max-w-sm mb-4 h-16" placeholder="Your text" name='Message'></textarea>
                    <button className='btn btn-outline border mx-auto block w-full max-w-sm text-white mb-4' type="Submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;