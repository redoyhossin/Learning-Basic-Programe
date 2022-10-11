import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faFaceTired } from '@fortawesome/free-solid-svg-icons'

const Errorhandler = () => {
    return (
        <div>
            <h1>omg error</h1>
            <FontAwesomeIcon className='text-8xl' icon={faFaceTired} />
        </div>
    );
};

export default Errorhandler;