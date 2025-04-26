import './App.css';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import RouterWrapper from './RouterWrapper';

function AppContent() {
  const location = useLocation();
  const [rutaAnterior, setRutaAnterior] = useState(null);

  useEffect(() =>{
    setRutaAnterior(location.pathname);
  },[location]);

  return <RouterWrapper rutaAnterior={rutaAnterior} />
}

function App() {
  return (
    <Router>
          <main>
            <AppContent />
          </main>
    </Router>
  );
}

export default App;
