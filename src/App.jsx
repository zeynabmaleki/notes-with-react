import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import Deleted from './components/Deleted';
import AddNote from './components/AddNote';
import '@fortawesome/fontawesome-free/css/all.css';

const images = Object.values(import.meta.glob('./backgrounds/*.{png,jpg,jpeg,svg}', { eager: true }));

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [note, setNote] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editNote, setEditNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const changeBackground = () => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      const img = new Image();
      img.src = randomImage.default || randomImage;

      img.onload = () => {
        setBackgroundImage(img.src);
      };
    };
    const intervalId = setInterval(changeBackground, 10000);
    changeBackground();
    return () => clearInterval(intervalId);
  }, []);

  // Load notes from localStorage on app start
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('note')) || [];
    console.log('Loaded notes from localStorage:', savedNotes); // Debugging log
    setNote(savedNotes);
  }, []);


  function loadingData(newList) {
    console.log('Saving to localStorage:', newList); // Debugging log
    localStorage.setItem('note', JSON.stringify(newList));
  }


  function handleAddNote(newNote) {
    console.log('Adding new note:', newNote); // Debugging log
    const newNoteList = [...note, newNote];
    setNote(newNoteList);
    loadingData(newNoteList);
  };

  function handleEditNote(index) {
    setEditIndex(index);
    setEditNote(note[index]);
    navigate('/add-note');
  }

  function handleSaveEdit(updatedNote) {
    const newNoteList = note.map((n, i) => i === editIndex ? updatedNote : n);
    setNote(newNoteList);
    loadingData(newNoteList);
    setEditIndex(null);
    setEditNote(null);
  }


  function handleDeleteNote(index) {
    const newNoteList = note.filter((_, i) => i !== index);
    setNote(newNoteList);
    loadingData(newNoteList);
    const deletedNote = note[index];
    const newDeletedList = [...deleted, deletedNote];
    setDeleted(newDeletedList);
    localStorage.setItem('deleted', JSON.stringify(newDeletedList));
  }


  function handleRestoreNote(index) {
    const restoredNote = deleted[index];
    const newDeletedList = deleted.filter((_, i) => i !== index);
    setDeleted(newDeletedList);
    loadingData(newDeletedList);
    const newNoteList = [...note, restoredNote];
    setNote(newNoteList);
    loadingData(newNoteList);
  }

  function handleSearch(notes, query) {
    if (!query.trim()) return notes;
    return notes.filter(
      n =>
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.content.toLowerCase().includes(query.toLowerCase())
    );
  }

  const filteredNotes = handleSearch(note, searchQuery);
  const filteredDeleted = handleSearch(deleted, searchQuery)

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-3xl h-[85%] bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-5 flex flex-col">
        {/* Conditionally render Navbar */}
        {['/', '/Deleted'].includes(location.pathname) &&
          <Navbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />}

        <main className="flex-grow overflow-hidden">
          <Routes>

            <Route path="/" element={
              <NoteList
                note={filteredNotes}
                handleDeleteNote={handleDeleteNote}
                handleEditNote={handleEditNote}
                searchQuery={searchQuery}
              />} />

            <Route path="/Deleted" element={
              <Deleted
                deleted={filteredDeleted}
                handleRestoreNote={handleRestoreNote}
                searchQuery={searchQuery}
              />
            } />

            <Route path="/add-note" element={
              <AddNote
                handleAddNote={handleAddNote}
                editNote={editNote}
                editIndex={editIndex}
                handleSaveEdit={handleSaveEdit}
                setEditNote={setEditNote}
                setEditIndex={setEditIndex}
              />} />

          </Routes>

        </main>
        <footer className="mt-2 text-center text-gray-700 text-xs">
          <p>Made By Zeynab Maleki rad</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
