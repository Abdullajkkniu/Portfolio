import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Footer from '../../Pages/Footer/Footer';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import PortfolioSlider from '../../Pages/Portfolio/PortfolioSlider';
import '../Home/Home.css';


const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen" className='block mx-auto' style={{ backgroundImage: `url(https://i.ibb.co/CQ3C26g/5137894.jpg)`, backgroundSize: 'cover' }}>

                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='border rounded-lg' src="https://i.ibb.co/FhF0GD9/received-1019606858985601-removebg-preview.png" />
                    <div className='mx-auto'>
                        <h1 class="text-8xl text-white font-thin text-yellow-600">Hello!</h1>
                        <p class="py-6 text-6xl text-white"><span className='font-thin'>I'm</span> Abdul Alim</p>
                        <div className='bodys'>

                        <h1 className='h-set' data-text='Web-'>Web</h1>
                        
                        <h1 className='h-sets ml-2' data-text=' Developer'>Developer</h1>
                        </div>
                        

                        <br />
                        
                        
                    </div>
                </div>
            </div>
            <About></About>
            <PortfolioSlider></PortfolioSlider>
            
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;