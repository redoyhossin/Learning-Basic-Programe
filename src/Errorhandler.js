import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faFaceTired } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Errorhandler = () => {
    return (
        <div className='my-32 text-center'>
           
            <FontAwesomeIcon className='text-8xl' icon={faFaceTired} /> <br />
            <h1 className='my-4 text-xl'>this page isn’t working</h1>
            <Link to='/' className='btn btn-primary'>Back To Home </Link>
        </div>
    );
};

export default Errorhandler;