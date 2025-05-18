import React from 'react';

export default function NoteCard(props) {
    const { title, content } = props;
    return (
        <card className=' px-5 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-101 transition-transform transition-shadow flex justify-between items-center'>
            <div className='py-2'>
                <h2 className="text-lg font-semibold text-gray-800 ">{title}</h2>
                <p className="text-gray-600">{content}</p>
            </div>
            <div className=' flex flex-row gap-5'>
                <i class="fa-solid fa-pen-to-square hover:scale-105 hover:text-blue-800 transition-transform"></i>
                <i class="fa-solid fa-trash hover:scale-105 hover:text-blue-800 transition-transform"></i>
            </div>
        </card>
    );
}
