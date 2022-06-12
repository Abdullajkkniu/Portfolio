import React from 'react';
import { Link } from 'react-router-dom';


const Nave = () => {
    const menuItem = <>
    <li><Link className='text-xl' to="/">Home</Link></li>
    <li><Link className='text-xl' to="/slider">Portfolio</Link></li>
    <li><Link className='text-xl' to="/blog">Blogs</Link></li>
    <li><Link className='text-xl' to='/about'>About</Link></li>
    
    </>

    
    return (
        <div class="navbar sticky top-0 z-10 bg-zinc-900 text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-300 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <a class="text-3xl font-serif ml-8">AB</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuItem}
    </ul>
  </div>
  <button class="btn-set rounded ml-15 text-white"><a href="https://drive.google.com/file/d/1eWzkiy7Jcrw1wLNM_gLZ53wEo9GEcXwp/view?usp=sharing">Downoad Resume</a> </button>
</div>
    );
};

export default Nave;