import React from 'react';

function Item(props){
    return(
        <div className='item'>
            <img src={props.src} alt="icon" className='icon'/>
           <p className='pAdv'>{props.text}</p>
        </div>
    ) 
}

export default Item;
