import React from 'react';
import './App.css';
import Contador from './components/Contador.js';
import Boton from './components/Boton.js';
import freeCodeCampLogo from './images/freeCodeCamp_logo.png';
// import React, { useState } from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      numClicks: 0
    };

    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de freecodecamp' />
        </div>
        <div className='contenedor-principal'>
          <Contador 
            numClicks={this.state.numClicks}
          />
          <Boton 
            texto='Click'
            esBotonClick={true}
            manejarClick={this.manejarClick}
          />  
          <Boton 
            texto='Reiniciar'
            esBotonClick={false}
            manejarClick={this.reiniciarContador}
          />  
        </div>
      </div>
    );
  }
}

export default App;
