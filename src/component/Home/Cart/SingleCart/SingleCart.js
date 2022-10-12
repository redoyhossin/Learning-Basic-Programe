import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartDetails from './CartDetails/CartDetails';


const SingleCart = () => {
    const getSingleCart = useLoaderData();
    const SingleCarts = getSingleCart.data.questions;
    return (
        <div>
            <div>
                <div className='text-xl font-bold  text-center'>
                    <h1 className='text-slate-500'>Start Quize {getSingleCart.data.name}</h1>
                    <p className='text-orange-600'>Total Quize {getSingleCart.data.total}</p>
                </div>
            </div>
            <div className="">
                {
                    SingleCarts.map(SingleCart => <CartDetails key={SingleCart.id} getSingleCart={getSingleCart} SingleCart={SingleCart} />)

                },

            </div>
        </div>
    );
};

export default SingleCart;