import React from 'react';

export default function Deleted({ deleted }) {
    return (
        <div className="flex flex-col h-full p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {deleted.length === 0 ? (
                    <p className="text-gray-500 text-center col-span-full">No Deleted Notes</p>
                ) : (
                    deleted.map((note, index) => (
                        <div key={index} className="p-4 bg-red-100 rounded-lg shadow-md">
                            {note}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
