import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import PaginaPrincipal from "./components/PaginaPrincipal/PaginaPricipal";
import InicioSesion from "./components/InicioSesion/InicioSesion";
import RegistroUsuario from "./components/RegistroUsuario";

const RouterWrapper = () => {
    const location = useLocation();
    const [rutaAnterior, setRutaAnterior] = useState(null);
    const prevLocationRef = useRef(location.pathname);

    useEffect(() => {
        setRutaAnterior(prevLocationRef.current);
        prevLocationRef.current = location.pathname;
    }, [location.pathname]);

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route 
                    path="/" 
                    element={<PaginaPrincipal rutaAnterior={rutaAnterior} />} 
                />
                <Route 
                    path="/Login" 
                    element={<InicioSesion rutaAnterior={rutaAnterior} />} 
                />
                <Route 
                    path="/SignUp" 
                    element={<RegistroUsuario rutaAnterior={rutaAnterior} />} 
                />
            </Routes>
        </AnimatePresence>
    );
};

export default RouterWrapper;
