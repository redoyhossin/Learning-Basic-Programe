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
                <MainHeader />
            </dir>
            <div className='grid  md:grid-cols-2 md:col-span-12 lg:grid-cols-4 gap-8 lg:my-32 justify-items-center '>

                {
                    getTopic.map(topic => <Cart key={topic.id} topic={topic} />)
                }

            </div>
        </div>
    );
};

export default Home;