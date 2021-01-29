import React from 'react';

import '../styles/ButtomStyles.css';

const Buttom = ({text, onClick}) => {
    return (
        <button 
        className='button-st'
        onClick={onClick}
      >{text}</button>
    )
}

export default Buttom;