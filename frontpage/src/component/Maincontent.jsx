import React from 'react';

const MainContent = () => {
    return (
        <div className="p-8 w-screen">
            <h1 className="text-4xl font-bold text-center mb-8">Snap photos and share like never before</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded shadow">
                    <h2 className="text-2xl font-semibold mb-4">Sed ut perspiciatis</h2>
                    <p className="text-gray-700 mb-4">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Learn more</button>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h2 className="text-2xl font-semibold mb-4">Lorem ipsum dolor</h2>
                    <p className="text-gray-700 mb-4">
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Learn more</button>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h2 className="text-2xl font-semibold mb-4">Lorem ipsum dolor</h2>
                    <p className="text-gray-700 mb-4">
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Learn more</button>
                </div>
                <div className="p-6 bg-white rounded shadow">
                    <h2 className="text-2xl font-semibold mb-4">Lorem ipsum dolor</h2>
                    <p className="text-gray-700 mb-4">
                        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
