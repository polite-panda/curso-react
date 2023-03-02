import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/TareaForm.css';

function TareaForm(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        // console.log(e.target.value);
        setInput(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();
        // console.log('Enviendo formulario....')

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    };

    return (
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type='text'
                placeholder='Escriba una Tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaForm;