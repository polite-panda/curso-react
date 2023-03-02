// import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador.js';
import Boton from './components/Boton.js';
import freeCodeCampLogo from './images/freeCodeCamp_logo.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);    
    // console.log('Click!');
  };

  const reiniciarContador = () => {
    setNumClicks(0);
    console.log('Reiniciar!');
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClicks={numClicks}
        />
        <Boton 
          texto='Click'
          esBotonClick={true}
          manejarClick={manejarClick}
        />  
        <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />  
      </div>
    </div>
  );
}

export default App;
