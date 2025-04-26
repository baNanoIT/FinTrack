import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaAngleLeft } from 'react-icons/fa';
import auditoriaLogin from '../../assets/AuditoriaFinancieraLogin.jpg';
import { motion } from "framer-motion";
import '../InicioSesion/InicioSesion.css';

const InicioSesion = () => {

const navigate = useNavigate();

const manejadorInicioSesion = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de validación
    navigate('/Home'); 
  };

  return (


      <div className="container">
        
        <div className="left-panel">  
          <div className="illustration">
            <img src={auditoriaLogin} alt="LoginImg"/>  
          </div>
        </div>

        <div className="right-panel">  
        <div className="right-panel-titulo">  

          <div className="titulo-header">  
            <Link to="/" className="boton-clase"> <FaAngleLeft/></Link>
            <h1>FinTrack</h1>
          </div>
          <a> Aprende, ahorra y crece</a>
        </div>

          <form className="form">
            <div className='bienvenido'>
              <h2>¡Bienvenido de nuevo!</h2>  
            </div>
          
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

            <button type="submit" className="login-button" onClick={manejadorInicioSesion}> 
              Iniciar sesión
            </button>

            <div className="links">
              <Link to="/SignUp">¿Todavía no tienes una cuenta? Regístrate</Link><br/>
              <Link to="/ResetPassword">¿Olvidó su contraseña?</Link><br/>
            </div>

          </form>
        </div>

      </div>    
  );
};

export default InicioSesion;
