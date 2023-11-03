import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import SocialButton from './SocialButton';
import Alert from './Alert';
import Formulario from './Formulario';

const Registro = () => {
    const iconFacebook = <FaFacebook />;
    const iconGithub = <FaGithub />;
    const iconLinkedin = <FaLinkedinIn />;
  
    return (
      <div>
        <h2>Crea una cuenta</h2>
        <SocialButton icon={iconFacebook} />
        <SocialButton icon={iconGithub} />
        <SocialButton icon={iconLinkedin} />
        <p>o usa tu email para registrarse</p>
        <Formulario/> 
      </div>
    );
  }
  
  export default Registro;
