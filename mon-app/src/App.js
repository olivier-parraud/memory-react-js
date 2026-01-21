import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Card from './components/Card/Card';
import Header from './components/Title/Header';
import { useState, useRef } from 'react';


function App() {

  const [videoUrl, setVideoUrl] = useState(null);
  const [videoClass, setVideoClass] = useState('');
  const videoRef = useRef(null);

  const handleRedPillClick = () => {
    setVideoUrl(process.env.PUBLIC_URL + "/assets/video/rick.mp4");
    setVideoClass('');
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  const handleBluePillClick = () => {
    setVideoUrl(process.env.PUBLIC_URL + "/assets/video/moi.mp4");
    setVideoClass('rotate-video');
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  return (
    <div className="App">
      {videoUrl && (
        <div className='video-background'>
          <video ref={videoRef} loop controls key={videoUrl} className={videoClass}>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}

      <div className='content'>
        <Header />
        <Card />
        <div className='button-container'>
          <Button
            text='pilule rouge'
            onClick={handleRedPillClick}
          />
          <Button
            text='pilule bleu'
            onClick={handleBluePillClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;