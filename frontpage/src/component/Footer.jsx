import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 w-screen">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <div className="text-lg font-bold mb-2">Logo</div>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Mobile app</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Features</a></li>
                            <li><a href="#" className="hover:underline">Live share</a></li>
                            <li><a href="#" className="hover:underline">Video record</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Community</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">Featured artists</a></li>
                            <li><a href="#" className="hover:underline">The Portal</a></li>
                            <li><a href="#" className="hover:underline">Live events</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Company</h3>
                        <ul>
                            <li><a href="#" className="hover:underline">About us</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                            <li><a href="#" className="hover:underline">History</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <ul>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 m-2">Login</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">Register</button>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
