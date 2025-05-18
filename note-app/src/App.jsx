import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const location = useLocation();


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

  const handleAddNote = (newNote) => {
    console.log('Adding new note:', newNote); // Debugging log
    const newNoteList = [...note, newNote];
    setNote(newNoteList);
    loadingData(newNoteList);
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-3xl h-[85%] bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-6 flex flex-col">
        {/* Conditionally render Navbar */}
        {['/', '/Deleted'].includes(location.pathname) && <Navbar />}
        <main className="flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<NoteList note={note} />} />
            <Route path="/Deleted" element={
              deleted.length === 0 ? <p>There are no deleted notes</p> : <Deleted deleted={deleted} />
            } />
            <Route path="/add-note" element={<AddNote handleAddNote={handleAddNote} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
