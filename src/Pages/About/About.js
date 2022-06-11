import React from 'react';
import '../About/About.css';

const About = () => {
    return (
        <div id='hello' className='body'>
            <div className='about-section'>
            <div className="inner-container">
                <h1 className='text-yellow-600'>About Me</h1>
                <p className="text">
                    I'm Md Abdul ALim. I have been actively involve in the web development sector for the last 1 year. I have developed website for small business, non-profit business,corporations, Hospitals and more. Besides this, I also passionate about blog writing, photography, event management etc. <br />
                    My speciality is fron-end web designer and develper making pixel magic and turning it into beautiful.

                </p>
                <div className="skills text-yellow-600">
                    <span>
                        Web Designer
                    </span>
                    <span>
                        Web Developer
                    </span>
                    <span>
                    Bloger
                    </span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;