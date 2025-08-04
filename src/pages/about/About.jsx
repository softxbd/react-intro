// src/pages/About.jsx
import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">About Us</h1>

            <p className="text-gray-700 mb-4">
                Welcome to <span className="font-semibold">MyApp</span>! We are a passionate team dedicated to building amazing web experiences using the latest technologies.
            </p>

            <p className="text-gray-700 mb-4">
                Our mission is to deliver high-quality, scalable, and user-friendly applications that solve real-world problems. We believe in continuous learning, open collaboration, and modern design principles.
            </p>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Values</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>💡 Innovation and creativity</li>
                    <li>🤝 Teamwork and collaboration</li>
                    <li>🌱 Continuous improvement</li>
                    <li>📢 Transparency and communication</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
