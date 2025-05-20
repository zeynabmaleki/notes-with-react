import React from 'react';

export default function Deleted(props) {
    const { deleted, handleRestoreNote, searchQuery } = props;
    return (
        <div className="flex flex-col gap-4 m-4 ">
            {deleted.length === 0 ? (
                <p className="text-black text-center py-20">
                    {searchQuery.trim() ? 'No result' : 'No Deleted Notes'}
                </p>
            ) : (
                deleted.map((note, index) => (
                    <div
                        key={index}
                        className="px-5 bg-red-200 rounded-lg shadow-md hover:shadow-lg hover:scale-101 transition-transform flex justify-between items-center"
                    >
                        <div className="py-2">
                            <h2 className="text-lg font-semibold text-red-800">{note.title}</h2>
                            <p className="text-gray-600">{note.content}</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-trash-can-arrow-up hover:scale-105 hover:text-red-800 transition-transform"
                                onClick={() => handleRestoreNote(index)}></i>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
