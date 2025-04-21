import { useState, useEffect } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import TodoList from './components/TodoList';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

const images = Object.values(import.meta.glob('./backgrounds/*.{png,jpg,jpeg,svg}', { eager: true }));

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');

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

  return (
    <>
      <div
        className="flex flex-col h-[100vh] shadow-neomorphism p-6 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Navbar and Routed Components in the Same Div */}
        <div className="flex flex-col flex-grow mx-50 my-5 bg-white/30 backdrop-blur-sm shadow-lg rounded-lg p-4">
          <Navbar />
          <div className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<NoteList />} />
              <Route path="/todos" element={<TodoList />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
