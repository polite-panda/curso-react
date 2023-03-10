import React from "react";
import '../styles/BotonClear.css';

const BotonClear = (props) => (
    <button
        className='boton-clear' 
        onClick={props.manejarClear}>
        {props.children}
    </button>
);

export default BotonClear;