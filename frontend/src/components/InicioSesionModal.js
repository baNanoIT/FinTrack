import React, { useState } from 'react';

const InicioSesionModal = ({ onClose, onOpenRegistro, onOpenRecuperarContrasena }) => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    /* const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        // Aquí puedes manejar el inicio de sesión
    }; */

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('http://localhost:3000/api/usuarios/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, contraseña })
          });
      
          const data = await response.json();
      
          if (response.ok) {
            // Guardar el token
            localStorage.setItem('token', data.token);
      
            // Mostrar mensaje de éxito
            alert(`${data.mensaje}\nBienvenido, ${data.usuario.nombres}`);
      
            // Aquí podrías cambiar de vista o cerrar el modal
          } else {
            alert(`Error: ${data.mensaje || 'No se pudo iniciar sesión'}`);
          }
      
        } catch (err) {
          alert('Error en la conexión con el servidor');
          console.error(err);
        }
      };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%', height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000
            }}
            onClick={onClose}
        >
            <div
                style={{
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'row',
                    borderRadius: '10px',
                    width: '90%',
                    maxWidth: '600px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden',
                    flexWrap: 'wrap'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sección de la imagen */}
                <div style={{
                    flex: 1,
                    backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/028/385/797/small_2x/an-illustration-of-a-man-looking-at-a-star-in-the-night-sky-generative-ai-photo.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '200px',
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px'
                }}>
                </div>

                {/* Sección del formulario */}
                <div style={{
                    flex: 1,
                    padding: '20px',
                    textAlign: 'center',
                    boxSizing: 'border-box'
                }}>
                    <h2 style={{ marginBottom: '20px', color: 'blue', fontWeight: 'bold' }}>Iniciar Sesión</h2>
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/847/847969.png" 
                        alt="Usuario" 
                        style={{
                            width: '80px',
                            height: '80px',
                            marginBottom: '20px'
                        }}
                    />
                    <form onSubmit={handleLoginSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                        <button type="submit" style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007BFF',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                            Iniciar Sesión
                        </button>
                    </form>
                    <p style={{ marginTop: '15px', color: '#555' }}>
                        ¿No tienes una cuenta?{' '}
                        <button onClick={onOpenRegistro} style={{
                            backgroundColor: 'transparent',
                            color: '#007BFF',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }}>
                            Regístrate aquí
                        </button>
                    </p>
                    <p style={{ marginTop: '10px', color: '#555' }}>
                        ¿Olvidaste tu contraseña?{' '}
                        <button onClick={onOpenRecuperarContrasena} style={{
                            backgroundColor: 'transparent',
                            color: '#007BFF',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }}>
                            Recuperar Contraseña
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InicioSesionModal;
