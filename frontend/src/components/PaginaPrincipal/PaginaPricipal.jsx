import React from 'react';
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Leon from '../../assets/Leon.jpg';
import './PaginaPrincipal.css';

const PaginaPrincipal = () => {
    return(
        <div className='TituloPagMain'>
            <Link to = "/Login">Fintrack Pagina Principal Waza</Link>
            <br/>
            <img className='Leon' src={Leon}/>
        </div>
        )
    }

export default PaginaPrincipal;
