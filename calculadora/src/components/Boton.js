import React from "react";
import '../styles/Boton.css';

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  // const claseOperador = valor => {
  //   return isNaN(valor) && (valor !== '.') && (valor !== '=') ? 'boton-contenedor operador' : 'boton-contenedor';
  // };

  return(
    <button
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      // className={claseOperador(props.children)}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </button>
  );
}

export default Boton;