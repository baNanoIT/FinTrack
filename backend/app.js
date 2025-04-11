const express = require('express');
const conectarDB = require('./config/db');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const gastoRoutes = require('./routes/gastosRoute');  // Importar las rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const transaccionRoutes = require('./routes/transRoutes');

// Crear la aplicación de Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
conectarDB();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
conectarDB()
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((err) => {
    console.log('Error de conexión:', err);
  });

// Usar las rutas para manejar las solicitudes
app.use(gastoRoutes);
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/transacciones', require('./routes/transRoutes'));
app.use('/api/presupuestos', require('./routes/presRoutes'));
app.use('/api/movimientos', require('./routes/movRoutes'));
app.use('/api/categorias', require('./routes/catRoutes'));
app.use('/api/divisas', require('./routes/divRoutes.js'));


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
