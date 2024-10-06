import React from 'react';

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 m-5 w-screen">
            <h2 className="text-5xl font-bold mb-4">Ready to take a free trial?</h2>
            <p className="text-4xl-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <div className="bg-white p-8 border-2 shadow-md w-2/4 h-2/4 max-w-md">
                <h2 className="text-2xl font-bold mb-4">Sign up for a free account</h2>
                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <input type="text" placeholder="First name" className="w-1/2 px-3 py-2 border border-gray-300 rounded" />
                        <input type="text" placeholder="Last name" className="w-1/2 px-3 py-2 border border-gray-300 rounded" />
                    </div>
                    <div className="flex space-x-4">
                        <input type="email" placeholder="Email address" className="w-1/2 px-3 py-2 border border-gray-300 rounded" />
                        <input type="tel" placeholder="Phone Number" className="w-1/2 px-3 py-2 border border-gray-300 rounded" />
                    </div>
                    <input type="password" placeholder="Create password" className="w-full px-3 py-2 border border-gray-300 rounded" />
                    <button type="submit" className=" flex w-1/3 bg-blue-500 text-center text-white px-8 py-2.5 rounded hover:bg-blue-400">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
