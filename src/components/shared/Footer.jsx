// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-10">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400">Privacy</a>
                    <a href="#" className="hover:text-gray-400">Terms</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
