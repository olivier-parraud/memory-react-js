import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Card from './components/Card/Card';
import Header from './components/Title/Header';
import { useState, useRef } from 'react';



function App() {


  const [isPlayed, setIsPlayed] = useState(null);

  // État pour stocker l'URL de la vidéo à afficher (null = pas de vidéo)
  const [videoUrl, setVideoUrl] = useState(null);

  // État pour stocker la classe CSS à appliquer à la vidéo (pour la rotation par exemple)
  const [videoClass, setVideoClass] = useState('');

  // Référence pour accéder directement à l'élément vidéo du DOM ?
  // Permet de contrôler la lecture (play, pause, etc.) - ? ne marche pas
  const videoRef = useRef(null);


  const handleRedPillClick = () => {
    // Change l'URL de la vidéo pour afficher rick.mp4
    setVideoUrl(process.env.PUBLIC_URL + "/assets/video/rick.mp4");


    // setTimeout attend 100ms avant d'exécuter le code
    // Cela laisse le temps à React de créer l'élément vidéo dans le DOM - DOM ?    
    setTimeout(() => {
      // Si la référence vidéo existe (videoRef.current n'est pas null)
      if (videoRef.current) {
        // Lance la lecture de la vidéo
        videoRef.current.play();
        setIsPlayed(true);
      }
    }, 100);
  };

  const handleBluePillClick = () => {
    // Change l'URL de la vidéo pour afficher moi.mp4
    setVideoUrl(process.env.PUBLIC_URL + "/assets/video/moi.mp4");
    setVideoClass('rotate-video');


    // setTimeout attend 100ms avant d'exécuter le code
    // Cela laisse le temps à React de créer l'élément vidéo dans le DOM - DOM ? 
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlayed(true);
      }
    }, 100);
  };

  const handlePauseClick = () => {
    setTimeout(() => {
      if (isPlayed) {
        videoRef.current.pause();
        setIsPlayed(false);
      } else {
        videoRef.current.play()
        setIsPlayed(true);
      }
    }, 100);

  }

  return (
    <div className="App">
      {/* Affiche la vidéo seulement si videoUrl n'est pas null (opérateur &&) */}
      {videoUrl && (
        <div className='video-background'>
          {/* 
            ref={videoRef} : lie cet élément à la référence pour le contrôler
            loop : la vidéo se répète en boucle
            controls : affiche les contrôles de lecture
            key={videoUrl} : force React à recréer l'élément si l'URL change - ?
            className={videoClass} : applique la classe CSS dynamique
          */}
          <video ref={videoRef} loop controls key={videoUrl} className={videoClass}>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}

      <div className='content'>
        <Header />
        <Card />
        <div className='button-container'>
          {/* Bouton pilule rouge : passe la fonction handleRedPillClick */}
          <Button
            text='pilule rouge'
            onClick={handleRedPillClick}

          />
          {/* Bouton pilule bleu : passe la fonction handleBluePillClick */}
          <Button
            text='pilule bleu'
            onClick={handleBluePillClick}
          />
          {isPlayed != null ?
            <Button
              text={`${isPlayed ? "pause" : "play"}`}
              onClick={handlePauseClick}

            />
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;

// J'ai essayé de mettre toutes ces fonctions dans le button.js mais j'ai eu une erreur