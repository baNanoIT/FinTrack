import './App.css';
import InicioSesionModal from './components/InicioSesionModal';
import RegistroUsuarioModal from './components/RegistroUsuarioModal';
import RecuperarContrasenaModal from './components/RecuperarContrasenaModal';
//import Home from './components/Home';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import RouterWrapper from './RouterWrapper';


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

function AppContent() {
  const location = useLocation();
  const [rutaAnterior, setRutaAnterior] = useState(null);

  useEffect(() =>{
    setRutaAnterior(location.pathname);
  },[location]);

  return <RouterWrapper rutaAnterior={rutaAnterior} />
}

function App() {
  const [activeModal, setActiveModal] = useState(null); // puede ser 'login', 'register' o 'recover'

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <Router>
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
            <AppContent />
          </main>
          <footer className="App-footer">
            <p>&copy; 2023 FinTrack. Todos los derechos reservados.</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
