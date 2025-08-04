// src/components/Navbar.jsx
import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <ul className="hidden md:flex space-x-6">
                    <li><Link to={"/"} className="hover:text-gray-200">Home</Link></li>
                    <li><Link to={"/about-us"}  className="hover:text-gray-200">About</Link></li>
                    <li><Link to={"/contact-us"} className="hover:text-gray-200">Contact</Link></li>
                </ul>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
