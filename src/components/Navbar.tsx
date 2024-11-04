// src/components/Navbar.tsx

import React from 'react';
import "../index.css";
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <NavLink to="/dashboard" className="nav-link">Home</NavLink>
            <NavLink to="/dashboard/credit" className="nav-link" >Credit</NavLink>
            <NavLink to="/dashboard/transactions" className="nav-link">Transactions</NavLink>
            <NavLink to="/auth/login" className="nav-link">Login</NavLink>
            <NavLink to="/auth/register" className="nav-link">Register</NavLink>
        </div>
    );
};

export default Navbar;
