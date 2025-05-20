import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddNote(props) {
    const {
        handleAddNote,
        editNote,
        editIndex,
        handleSaveEdit,
        setEditNote,
        setEditIndex
    } = props;

    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const navigate = useNavigate();

    // Prefill fields when editing
    useEffect(() => {
        if (editNote) {
            setNoteTitle(editNote.title || '');
            setNoteContent(editNote.content || '');
        } else {
            setNoteTitle('');
            setNoteContent('');
        }
    }, [editNote]);

    const handleSave = () => {
        if (noteContent.trim() === '' || noteTitle.trim() === '') {
            alert('Note and title cannot be empty!');
            return;
        }

        if (editNote && editIndex !== null) {
            handleSaveEdit({ title: noteTitle, content: noteContent });
            setEditNote(null);
            setEditIndex(null);
        } else {
            handleAddNote({ title: noteTitle, content: noteContent });
        }
        navigate('/');
    };

    return (
        <div className="w-full max-w-3xl flex">
            <div className="justify-center h-screen flex-grow overflow-hidden rounded-lg px-18 py-20 flex-col">
                <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
                    {editNote ? 'Edit Note' : 'Add a New Note'}
                </h1>
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white/70 placeholder-gray-500 text-gray-800"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                />
                <textarea
                    className="w-full h-24 p-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white/70 placeholder-gray-500 text-gray-800"
                    placeholder="Write your note here..."
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                ></textarea>
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                        onClick={handleSave}
                    >
                        {editNote ? 'Save Changes' : 'Save Note'}
                    </button>
                </div>
            </div>
        </div>
    );
}