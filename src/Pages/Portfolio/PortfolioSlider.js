import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Autoplay,EffectCoverflow, Pagination, Navigation } from "swiper";



import './PortfolioSlider.css';
import 'swiper/css';
import { Link } from 'react-router-dom';

const PortfolioSlider = () => {
    return (
        <div className='bg-black mt-0'>
            <h1 className='text-yellow-600 text-5xl text-center pt-3 font-serif'>Completed Projects</h1>
            <Swiper
        effect={"coverflow"}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        
        
        modules={[Autoplay,EffectCoverflow, Pagination,Navigation]}
        className="mySwiper"

      >
        
        <SwiperSlide>
        <div class="card glass">
                <img className='h-52 w-full' src="https://i.ibb.co/7pVyLZ4/MY-PHOTOSHOT.png" alt="car!"/>
                <div class="card-body h-60">
                    <h2 class="card-title text-white">My-Photoshot</h2>
                    <p className='text-white'>In this website an individual photographer provides his/her services in professional manner</p>
                    <div class="card-actions justify-center">
                        <Link to='/photoshot' class="btn-set text-white">Explore now!</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card glass">
                <figure><img className='h-52 w-full' src="https://i.ibb.co/kybVgf9/Globx-Warehouse-web-app.png" alt="car!"/></figure>
                <div class="card-body h-60">
                    <h2 class="card-title text-white">GlobX-Wearhouse</h2>
                    <p className='text-white'>In this website, the owner manage, update and delete his products by login or authentication</p>
                    <div class="card-actions justify-center">
                        <Link to='/warehouse' class="btn-set text-white">Explore now!</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card  glass ">
                <figure><img className='h-52 w-full' src="https://i.ibb.co/GdnMTxg/assignttt-3.png" alt="car!"/></figure>
                <div class="card-body h-60">
                    <h2 class="card-title text-white">Daylight Convention Center</h2>
                    <p className='text-white'>In this website they provides convention center for any event in a professional manner.</p>
                    <div class="card-actions justify-center">
                        <Link to='/daylight' class="btn-set text-white">Explore now!</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card  glass">
                <figure><img className='h-52 w-full' src="https://i.ibb.co/hLcn6nv/assign-8.png" alt="car!"/></figure>
                <div class="card-body h-60">
                    <h2 class="card-title text-white">Laptop Gallery</h2>
                    <p className='text-white'>Laptiop gallery is a website , where you can choose your best laptop randomly</p>
                    <div class="card-actions justify-center">
                        <Link to='/laptopgallery' class="btn-set text-white">Explore now!</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card glass ">
                <figure><img className='h-52 w-full' src="https://i.ibb.co/99RPt85/assign-12.png" alt="car!"/></figure>
                <div class="card-body h-60">
                    <h2 class="card-title text-white">TechByko</h2>
                    <p className='text-white'>TechByko is a automobile tool manufacturing company, where admin can manage users order, admin can make another person admin etc. </p>
                    <div class="card-actions justify-center">
                        <Link to='/techbyko' class="btn-set text-white">Explore now!</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card glass ">
                <figure><img className='h-52 w-full' src="https://i.ibb.co/yyN6tPQ/Laptop-Market-Analysis-assign-9.png" alt="car!"/></figure>
                <div class="card-body h-60">
                    <h2 class="card-title text-white">Laptop-House</h2>
                    <p className='text-white'>Laptop house is a laptop selling company, where user can order his desired laptop</p>
                    <div class="card-actions justify-center">
                        <Link to='/laptophouse' class="btn-set text-white">Explore now!</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default PortfolioSlider;