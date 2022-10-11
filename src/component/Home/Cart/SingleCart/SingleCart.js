import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartDetails from './CartDetails/CartDetails';


const SingleCart = () => {
    const getSingleCart = useLoaderData();
    const SingleCarts = getSingleCart.data.questions;
    return (
        <div>
            {
                SingleCarts.map(SingleCart => <CartDetails key={SingleCart.id} SingleCart={SingleCart} />)

            },
           
        </div>
    );
};

export default SingleCart;