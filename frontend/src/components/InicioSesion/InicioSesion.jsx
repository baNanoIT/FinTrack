import React from 'react';
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import auditoriaLogin from '../../assets/AuditoriaFinancieraLogin.jpg';
import { motion } from "framer-motion";
import './InicioSesion.css';

import RegistroUsuario from '../RegistroUsuario';

const InicioSesion = () => {
  return (
    <motion.div
      initial={{ x: '50vh', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="container">
        
        <div className="left-panel">  
          <div className="illustration">
            <img src={auditoriaLogin} alt="LoginImg"/>  
          </div>
        </div>

        <div className="right-panel">
          <Link to="/" className="boton-clase"> Regresar </Link>

          <h1>FinTrack</h1>
          <a> Aprende, ahorra y crece</a>
          
          <h2>¡Bienvenido de nuevo!</h2>

          <form className="form">
            
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Correo electrónico" />
            </div>

            <div className="input-group">
              <FaLock className="icon" />
              <input type="password" placeholder="Contraseña" />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Recordar contraseña</label>
            </div>

            <button type="submit" className="login-button">Iniciar sesión</button>

            <div className="links">
              <Link to="/SignUp">¿Todavía no tienes una cuenta? Regístrate</Link><br/>
              <Link to="/ResetPassword">¿Olvidó su contraseña?</Link><br/>
            </div>

          </form>
        </div>

      </div>
    </motion.div>    
  );
};

export default InicioSesion;
