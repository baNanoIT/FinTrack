import React, { useState } from 'react';
import './App.css';
import InicioSesionModal from './components/InicioSesionModal';
import RegistroUsuarioModal from './components/RegistroUsuarioModal';
import RecuperarContrasenaModal from './components/RecuperarContrasenaModal';
import Home from './components/Home';

function Header({ onLoginClick }) {
  return (
    <header className="App-header">
      <img src="./Fintrack-Logo-Azul.png" alt="FinTrack Logo" className="logo" />
      <h1>FinTrack - Gestión de Finanzas Personales</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#features">Funciones</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      <button className="login-button" onClick={() => onLoginClick('login')}>Iniciar Sesión</button>
    </header>
  );
}

function App() {
  const [activeModal, setActiveModal] = useState(null); // puede ser 'login', 'register' o 'recover'

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="App-container">
      {/* Render de modales FUERA del div borroso */}
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

      {/* Se aplica blur aquí */}
      <div className={`App ${activeModal ? 'blurred' : ''}`}>
        <Header onLoginClick={openModal} />
        <main>
          <section id="features">
            <h2>Funciones</h2>
            <p>Descripción de las funciones de la aplicación.</p>
          </section>
          <section id="contact">
            <h2>Contacto</h2>
            <p>Información de contacto.</p>
          </section>
          <Home />
        </main>
        <footer className="App-footer">
          <p>&copy; 2023 FinTrack. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
