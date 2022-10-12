import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartDetails = ({ SingleCart, getSingleCart }) => {
    const { options, correctAnswer, id, question } = SingleCart;
    const { name, total } = getSingleCart.data;
    const result = options.map(option => {
        return option
    });

    const radioButtonHandler = (result) => {

        if (result === correctAnswer) {
            toast.success("correct", {
                position: 'top-center'
            })

        } else {
            toast.error('wrong', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const ShowAns = () => {
        toast(`${correctAnswer}`, {
            position: 'top-center',
            theme: "dark",
        })

    }

    return (
        <div>

            <div className='m-12 bg-stone-400 p-8 rounded-xl' >

                <div className='flex items-center justify-between mx-3'>
                    <div>
                        <h1 className='font-bold'>
                            {question.slice(3, -4)}
                        </h1>
                    </div>
                    <div>

                        <button onClick={ShowAns}><FontAwesomeIcon className='' icon={faEye} /></button>
                        <ToastContainer />
                    </div>
                </div>


                <div className='py-4 px-6  my-4 bg-violet-600  rounded-xl'>
                    <div className="form-control ">

                        <label className=' flex items-center'>

                            <input onClick={() => radioButtonHandler(result[0])} type="radio" name="radio-6" className="radio  " />

                            <span className="label-text mx-3 font-semibold  text-white">{result[0]}</span>
                        </label>

                    </div>

                </div>

                <div className='py-4 px-6  my-4 bg-violet-600  rounded-xl'>
                    <div className="form-control ">
                        <label className=' flex items-center'>

                            <input onClick={() => radioButtonHandler(result[1])} type="radio" name="radio-6" className="radio " />
                            <span className="label-text mx-3 font-semibold  text-white">{result[1]}</span>
                        </label>
                    </div>
                </div>
                <div className='py-4 px-6  my-4 bg-violet-600  rounded-xl'>
                    <div className="form-control ">
                        <label className=' flex items-center'>

                            <input onClick={() => radioButtonHandler(result[2])} type="radio" name="radio-6" className="radio " />
                            <span className="label-text mx-3 font-semibold  text-white">{result[2]}</span>
                        </label>
                    </div>
                </div>
                <div className='py-4 px-6  my-4 bg-violet-600  rounded-xl'>
                    <div className="form-control ">
                        <label className=' flex items-center'>

                            <input onClick={() => radioButtonHandler(result[3])} type="radio" name="radio-6" className="radio " />
                            <span className="label-text mx-3 font-semibold  text-white">{result[3]}</span>
                        </label>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>

    );
};

export default CartDetails;