import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaAngleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import auditoriaLogin from '../../assets/AuditoriaFinancieraLogin.jpg';
import './ReestablecerContraseña.css'; // (ahorita te explico qué poner aquí)

const ReestablecerContraseña = () => {
  const navigate = useNavigate();

  const manejadorRestablecer = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar correo de recuperación
    navigate('/ConfirmacionEnvio');
  };

  return (
    <div className="container">
      {/* Panel izquierdo con imagen */}
      <motion.div 
        className="left-panel" 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="illustration">
          <img src={auditoriaLogin} alt="Imagen Recuperar Contraseña" />
        </div>
      </motion.div>

      {/* Panel derecho con formulario */}
      <motion.div 
        className="right-panel" 
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="right-panel-titulo">
          <div className="titulo-header">
            <Link to="/Login" className="boton-clase">
              <FaAngleLeft />
            </Link>
            <h1>FinTrack</h1>
          </div>
          <span>Recupera tu acceso fácilmente</span>
        </div>

        <form className="form">
          <div className="bienvenido">
            <h2>¿Olvidaste tu contraseña?</h2>
            <p>Introduce tu correo electrónico para enviarte instrucciones.</p>
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Correo electrónico" required />
          </div>

          <button type="submit" className="login-button" onClick={manejadorRestablecer}>
            Enviar instrucciones
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ReestablecerContraseña;
