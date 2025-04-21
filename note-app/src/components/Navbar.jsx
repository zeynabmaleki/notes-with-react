import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NoteList from './NoteList';
import TodoList from './TodoList';

export default function Navbar() {
    return (
        <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-4 flex flex-col">
            {/* Navigation Bar */}
            <div className="flex justify-between items-center">
                {/* Navigation Links */}
                <div className="flex space-x-4">
                    <Link to="/" className="text-blue-500 hover:underline">
                        Notes
                    </Link>
                    <span className="text-gray-500">|</span>
                    <Link to="/todos" className="text-blue-500 hover:underline">
                        Todos
                    </Link>
                </div>

                {/* Search and Add Section */}
                <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-white/40 backdrop-blur-md rounded-full px-4 py-2 shadow-inner">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
                        />
                        <i className="fa-solid fa-magnifying-glass text-gray-600"></i>
                    </div>
                    <button className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-blue-600 transition">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>


        </div>
    );
}
