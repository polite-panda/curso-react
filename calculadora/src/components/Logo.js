import React from "react";
import freeCodeCampLogo from '../images/freeCodeCamp_logo.png';

function Logo() {
    return(
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freecodecamp'
        />
    );
}

export default Logo;