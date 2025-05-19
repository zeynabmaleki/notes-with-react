import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const { searchQuery, setSearchQuery } = props;

    return (
        <div className="bg-white/20 backdrop-blur-md shadow-md rounded-lg py-3 px-6 flex justify-between items-center">
            {/* Navigation Links */}
            <div className="flex space-x-6">
                <Link
                    to="/"
                    className="text-blue-600 font-medium hover:text-blue-800 hover:scale-105 transition-transform"
                >
                    All  
                </Link>
                <Link
                    to="/Deleted"
                    className="text-blue-600 font-medium hover:text-blue-800 hover:scale-105 transition-transform"
                >
                    Deleted
                </Link>
            </div>

            {/* Search Section */}
            <div className="flex items-center bg-gray-100/50 rounded-full px-4 py-2 shadow-inner">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass text-gray-600"></i>
            </div>
        </div>
    );
}
