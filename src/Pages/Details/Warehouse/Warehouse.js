import React from 'react';

const Warehouse = () => {
    return (
        <div className='bg-black'>
            <h1 className='text-5xl p-6 text-yellow-600 text-center font-bold font-serif'>Portfolio Details</h1>
            <div className='border my-4 w-100 mx-12 p-10'>
                <h1 className='text-center mb-4 text-2xl font-bold text-white'>GlobX-Warehouse</h1>
                <p className='text-lg font-semibold my-2 text-white'>Features: <br />
                    1.In this website, the owner can store various food companies products. <br />
                    2. Owner can update or restock his product. <br />
                    3. The logged-in user will see only his Items. If the user wants, he should be able to delete. <br />
                    Tools: React, React-router, React- bootstrap, Firebase, React-firebse-hooks, React-toastify, Node
                    js, Mongodb , Express js.
                    any item.</p>
                <a className='text-white font-semibold border' href=" https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-Abdullajkkniu">Client<img className='w-10 inline' src="https://i.ibb.co/kQ14njL/download.png" alt="" /></a>
                <a className='text-white font-semibold ml-10 border' href="  https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-Abdullajkkniu">Server<img className='w-10 inline' src="https://i.ibb.co/kQ14njL/download.png" alt="" /></a>
                <a href="https://my-warehouse-management.web.app/"><img className='w-10 border inline ml-10' src="https://i.ibb.co/PxMRcQ3/live.png" alt="" /></a>


            </div>
            <iframe className='responsive' style={{ width: '100%', height: '500px' }} src="  https://my-warehouse-management.web.app/" frameborder="0"></iframe>
        </div>
    );
};

export default Warehouse;