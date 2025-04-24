// Lo use para realizar pruebas de los modales, ahorita ya no esta en uso
/* import React, { useState } from 'react';
import InicioSesionModal from './InicioSesionModal';
import RegistroUsuarioModal from './RegistroUsuarioModal';
import RecuperarContrasenaModal from './RecuperarContrasenaModal';

const Home = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isRecoverPasswordOpen, setIsRecoverPasswordOpen] = useState(false);

    const openLoginModal = () => {
        setIsRegisterOpen(false);  
        setIsRecoverPasswordOpen(false); 
        setIsLoginOpen(true);      
    };

    const openRegisterModal = () => {
        setIsLoginOpen(false);     
        setIsRecoverPasswordOpen(false); 
        setIsRegisterOpen(true);   
    };

    const openRecoverPasswordModal = () => {
        setIsLoginOpen(false);     
        setIsRegisterOpen(false);  
        setIsRecoverPasswordOpen(true); 
    };

    const closeLoginModal = () => setIsLoginOpen(false);
    const closeRegisterModal = () => setIsRegisterOpen(false);
    const closeRecoverPasswordModal = () => setIsRecoverPasswordOpen(false);

    return (
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    textAlign: 'center',
                    padding: '20px',
                    filter: isLoginOpen || isRegisterOpen || isRecoverPasswordOpen ? 'blur(5px)' : 'none',
                    transition: 'filter 0.3s ease',
                }}
            >
                <h1>Bienvenido a FinTrack</h1>
                <p>Administra tus finanzas de manera sencilla y eficiente.</p>
                <button
                    onClick={openLoginModal}
                    style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' }}
                >
                    Iniciar Sesión
                </button>
            </div>

            {isLoginOpen && (
                <InicioSesionModal
                    isOpen={isLoginOpen}
                    onClose={closeLoginModal}
                    onOpenRegistro={openRegisterModal}
                    onOpenRecuperarContrasena={openRecoverPasswordModal}
                />
            )}

            {isRegisterOpen && (
                <RegistroUsuarioModal
                    isOpen={isRegisterOpen}
                    onClose={closeRegisterModal}
                    onOpenIniciarSesion={openLoginModal}
                />
            )}

            {isRecoverPasswordOpen && (
                <RecuperarContrasenaModal
                    isOpen={isRecoverPasswordOpen}
                    onClose={closeRecoverPasswordModal}
                    onOpenIniciarSesion={openLoginModal}
                />
            )}
        </div>
    );
};

export default Home;
 */