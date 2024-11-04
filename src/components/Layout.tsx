// src/components/Layout.tsx

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../index.css"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
