import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const CartDetails = ({ SingleCart }) => {
    const { options, correctAnswer, id, question } = SingleCart;
    console.log(SingleCart)
    const result = options.map(option => {
        return option
    });
    return (
        <div className='m-12 bg-stone-400 p-8' >

            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold'>
                        {question.slice(3, -4)}
                    </h1>
                </div>
                <div>

                    <FontAwesomeIcon className='' icon={faEye} />
                </div>
            </div>


            <div className='py-4  my-4'>
                <div className="form-control ">

                    <label className=' flex items-center'>
                        <input type="radio" name="radio-6" className="radio " />
                        <span className="label-text mx-3 font-semibold">{result[0]}</span>
                    </label>
                </div>

            </div>
            <div className='py-4  my-4'>
                <div className="form-control ">
                    <label className=' flex items-center'>

                        <input type="radio" name="radio-6" className="radio " />
                        <span className="label-text mx-3 font-semibold">{result[1]}</span>
                    </label>
                </div>
            </div>
            <div className='py-4  my-4'>
                <div className="form-control ">
                    <label className=' flex items-center'>

                        <input type="radio" name="radio-6" className="radio " />
                        <span className="label-text mx-3 font-semibold">{result[2]}</span>
                    </label>
                </div>
            </div>
            <div className='py-4  my-4'>
                <div className="form-control ">
                    <label className=' flex items-center'>

                        <input type="radio" name="radio-6" className="radio " />
                        <span className="label-text mx-3 font-semibold">{result[3]}</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;