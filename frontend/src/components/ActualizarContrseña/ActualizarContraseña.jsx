import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaEye, FaEyeSlash, FaAngleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ActualizarContraseña.css';

const ActualizarContraseña = () => {
  const [mostrarPassword1, setMostrarPassword1] = useState(false);
  const [mostrarPassword2, setMostrarPassword2] = useState(false);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const manejadorActualizar = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!password1 || !password2) {
      setError('Por favor llena ambos campos.');
      return;
    }

    if (password1.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    if (password1 !== password2) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Si todo está bien:
    setError('');
    console.log('Contraseña actualizada correctamente');
    // Aquí luego conectarás al backend
    navigate('/Login'); 
  };

  return (
    <div className="container">
      <motion.div 
        className="update-panel"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="titulo-header">
          <Link to="/Login" className="boton-clase">
            <FaAngleLeft />
          </Link>
          <h1>FinTrack</h1>
        </div>

        <h2>Actualizar Contraseña</h2>
        <p>Introduce tu nueva contraseña segura</p>

        <form className="form" onSubmit={manejadorActualizar}>
          <div className="input-group">
            <FaLock className="icon" />
            <input 
              type={mostrarPassword1 ? "text" : "password"} 
              placeholder="Nueva contraseña" 
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
            />
            <span 
              className="eye-icon"
              onClick={() => setMostrarPassword1(!mostrarPassword1)}
            >
              {mostrarPassword1 ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input 
              type={mostrarPassword2 ? "text" : "password"} 
              placeholder="Confirmar nueva contraseña" 
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
            <span 
              className="eye-icon"
              onClick={() => setMostrarPassword2(!mostrarPassword2)}
            >
              {mostrarPassword2 ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Actualizar contraseña
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ActualizarContraseña;
