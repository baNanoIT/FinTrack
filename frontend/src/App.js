/* import React from 'react';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import InicioSesionModal from './components/InicioSesionModal';

function Header() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <header className="App-header">
      <img src="/logo.png" alt="FinTrack Logo" className="logo" />
      <h1>FinTrack - Gestión de Finanzas Personales</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#features">Funciones</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <button className="login-button" onClick={() => handleOpenModal('login')}>Iniciar Sesión</button>
      {activeModal === 'login' && <InicioSesionModal onClose={closeModal} />}
      {activeModal === 'signup' && <div className="signup-modal">Signup Modal Content</div>}
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
 */

// App.js
import React, { useState } from 'react';
import './App.css';
import InicioSesionModal from './components/InicioSesionModal';
import RegistroUsuarioModal from './components/RegistroUsuarioModal';
import RecuperarContrasenaModal from './components/RecuperarContrasenaModal';

function Header() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <header className="App-header">
      <img src="/logo.png" alt="FinTrack Logo" className="logo" />
      <h1>FinTrack - Gestión de Finanzas Personales</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#features">Funciones</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <button className="login-button" onClick={() => openModal('login')}>Iniciar Sesión</button>

      {activeModal === 'login' && (
        <InicioSesionModal
          isOpen={true}
          onClose={closeModal}
          onOpenRegistro={() => openModal('register')}
          onOpenRecuperarContrasena={() => openModal('recover')}
        />
      )}

      {activeModal === 'register' && (
        <RegistroUsuarioModal
          isOpen={true}
          onClose={closeModal}
          onOpenIniciarSesion={() => openModal('login')}
        />
      )}

      {activeModal === 'recover' && (
        <RecuperarContrasenaModal
          isOpen={true}
          onClose={closeModal}
          onOpenIniciarSesion={() => openModal('login')}
        />
      )}
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      {/* Aquí podrías poner el contenido principal si deseas algo debajo del header */}
    </div>
  );
}

export default App;
