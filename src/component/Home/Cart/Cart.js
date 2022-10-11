import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div>
            <div className="card w-72 bg-slate-300 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Question: {total}</p>
                    <div className="card-actions">
                        <Link to={`/Cart/${id}`} className='btn btn-primary'>Get Start</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;