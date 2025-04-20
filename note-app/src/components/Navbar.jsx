import React from 'react';

export default function Navbar() {
    return (
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-4 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">Make Notes</span>

            <div className="flex items-center bg-white/40 backdrop-blur-md rounded-full px-4 py-2 shadow-inner">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
                />
                <i className="fa-solid fa-magnifying-glass text-gray-600"></i>
            </div>

            <div className="flex items-center space-x-4">
                <button className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-blue-600 transition">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
}
