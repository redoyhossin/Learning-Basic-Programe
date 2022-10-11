import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader';
import Cart from './Cart/Cart';
import './Home.css'
const Home = () => {
    const getTopics = useLoaderData();
    const getTopic = getTopics.data;
    return (
        <div>
            <dir className=''>
                <MainHeader/>
            </dir>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-32 justify-items-center '>

                {
                    getTopic.map(topic => <Cart key={topic.id} topic={topic} />)
                }

            </div>
        </div>
    );
};

export default Home;