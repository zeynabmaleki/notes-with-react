import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteCard from './NoteCard.jsx';

export default function NoteList({ note }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full relative">
            <div className="flex-grow overflow-y-auto p-4">
                <div className="flex flex-col gap-4">
                    {note.length === 0 ? (
                        <p className="text-gray-500 text-center">No Notes Yet</p>
                    ) : (
                        note.map((noteItem, index) => (
                            <NoteCard
                                key={index}
                                title={noteItem.title} // Pass title as a prop
                                content={noteItem.content} // Pass content as a prop
                            />
                        ))
                    )}
                </div>
            </div>

            {/* Add Note Button */}
            <button
                className="absolute bottom-6 right-6 bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
                onClick={() => navigate('/add-note')}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
