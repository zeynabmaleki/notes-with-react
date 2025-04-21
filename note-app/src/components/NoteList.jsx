import React from 'react';
import NoteCard from './NoteCard.jsx';
import { Link } from 'react-router-dom';

export default function NoteList() {
    return (
        <div>
            <span>Note list  </span>
            {/* Use Link to navigate to the /todos route */}
            <Link to="/todos"></Link>
        </div>
    );
}
