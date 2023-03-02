import React from "react";
import '../styles/Boton.css';

function Boton({ texto, esBotonClick, manejarClick }){
  return (
    <button 
      className={ esBotonClick ? 'boton-click' : 'boton-reiniciar' }
      onClick={ manejarClick }>
      {texto}
    </button>
  );
}

export default Boton;