import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function NoteCard(props) {
    const { title, content, handleDeleteNote, handleEditNote } = props;
    const navigate = useNavigate();

    return (
        <div className='px-5 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-101 transition-transform flex justify-between items-center'>
            <div className='py-2'>
                <h2 className="text-lg font-semibold text-gray-800 ">{title}</h2>
                <p className="text-gray-600">{content}</p>
            </div>
            <div className='flex flex-row gap-5'>
                <i className="fa-solid fa-pen-to-square ..."
                    onClick={handleEditNote}></i>

                <i className="fa-solid fa-trash hover:scale-105 hover:text-blue-800 transition-transform"
                    onClick={handleDeleteNote}></i>
            </div>
        </div>
    );
}
