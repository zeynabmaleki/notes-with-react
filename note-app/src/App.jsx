import { useState, useEffect } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import '@fortawesome/fontawesome-free/css/all.css';

// Dynamically import all images from the 'backgrounds' folder
const images = Object.values(import.meta.glob('./backgrounds/*.{png,jpg,jpeg,svg}', { eager: true }));

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [nextImage, setNextImage] = useState(''); // Preload the next image

  useEffect(() => {
    // Function to preload and set a random background image
    const changeBackground = () => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      const img = new Image();
      img.src = randomImage.default || randomImage;

      // Preload the image and update the background only after it's loaded
      img.onload = () => {
        setBackgroundImage(img.src);
        setNextImage(''); // Clear the preloaded image after it's applied
      };

      // Set the next image to preload
      setNextImage(img.src);
    };

    // Set an interval to change the background every 10 seconds
    const intervalId = setInterval(changeBackground, 10000);

    // Call the function immediately to set the initial background
    changeBackground();

    // Cleanup the interval on component unmount
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
        <div className="flex flex-col h-full mx-50 my-5 bg-white/30 backdrop-blur-sm shadow-lg rounded-lg p-4">
          <Navbar />
          <NoteList />
        </div>
      </div>
    </>
  );
}

export default App;
