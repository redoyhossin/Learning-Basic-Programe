import React from 'react';
import './MainHeader.css'
import QuizeImg from '../../assets/Quize.png'
const MainHeader = () => {
    return (
        <div className='sm:flex text-center lg:flex items-center justify-between mx-8'>
            <div>
                <h1 className='text-6xl font-bold'>
                    Easy and intuitive <br />
                    online testing
                </h1>
            </div>

            <div className='mt-12 '>
                <img className='w-96' src={QuizeImg} alt="" />
            </div>
        </div>
    );
};

export default MainHeader;