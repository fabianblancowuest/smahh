import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav/Nav';
import About from './About';
import Login from './Login/Login';


const Layout = () => {
    // Simula el tipo de usuario (por ejemplo, 'user' o 'staff')
    const userType = "staff"; // Puedes cambiar esto según tu lógica

    return (
        <div>
            {/* Rutas comunes */}
            {!userType &&

                <Routes>
                    <Route exact path='/' element={<Nav />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                </Routes>}

            {/* Renderizado condicional de acuerdo al tipo de usuario */}
            {userType === 'user' && (
                <Routes>
                    <Route exact path='/' element={<Nav />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            )}

            {userType === 'staff' && (
                <Routes>
                    <Route exact path='/' element={<Nav />} />
                </Routes>
            )}
        </div>
    );
}

export default Layout;