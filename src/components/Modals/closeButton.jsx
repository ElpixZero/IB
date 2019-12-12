import React from 'react';
import close from '../../img/close.svg';


function CloseButton() {
    return(
        <img src={close} alt="X"className='closeButton' />
    )
}

export default CloseButton;