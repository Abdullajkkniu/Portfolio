import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../Pages/Contact/Contact';
import Footer from '../../Pages/Footer/Footer';
import Portfolio from '../../Pages/Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen" className='block mx-auto' style={{ backgroundImage: `url(https://i.ibb.co/CQ3C26g/5137894.jpg)`, backgroundSize: 'cover' }}>

                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='border rounded-lg' src="https://i.ibb.co/FhF0GD9/received-1019606858985601-removebg-preview.png" />
                    <div className='mx-auto'>
                        <h1 class="text-8xl text-white font-thin">Hello!</h1>
                        <p class="py-6 text-6xl text-white"><span className='font-thin'>I'm</span> Abdul Alim</p>
                        <p className='text-3xl text-white'>Web Developer</p>
                        <br />
                        
                        <button class="btn btn-outline text-white"><a href="https://drive.google.com/file/d/1_7HdNsF1EFx_4PoFtG0A-rcJ8rwotmx4/view?usp=sharing">Downoad Resume</a> </button>
                    </div>
                </div>
            </div>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;