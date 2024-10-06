import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between p-4 w-screen">
                <div className="flex items-center">
                    <span className="text-xl font-bold">Logo</span>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Company</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="px-10 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">Login</button>
                    <button className="px-10 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-400">Register</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
