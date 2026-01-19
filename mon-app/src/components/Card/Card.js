import React, { useState, useEffect } from 'react';
import "./card.css";

function Card(props) {

    const images = [
        '/assets/img/0.jpg',
        '/assets/img/1.webp',
        '/assets/img/2.avif',
        '/assets/img/3.jpeg',
        '/assets/img/4.jpg',
        '/assets/img/5.jpg',
        '/assets/img/6.jpg',
        '/assets/img/7.jpeg',
        '/assets/img/8.webp',
        '/assets/img/9.jpg',

    ];

    const dos = [
        
        '/assets/img/dos.jpg',
    ]

    // Fonction pour mélanger un tableau
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Math regroupe toutes les fonctions de maths -- floor lui, arondi au plus grand entier.
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Créer les paires et mélanger
    const [shuffledImages, setShuffledImages] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);

    useEffect(() => {
        const pairs = images.flatMap(img => [img, img]);
        // Map parcourt un tableau et ça récréer un nouveau tableau.
        setShuffledImages(shuffleArray(pairs));
    },  []);

    const handleCardClick = (index) => {
        if (!flippedCards.includes(index)) {
            setFlippedCards([...flippedCards, index])
        }
    };

    return (
        <div className='card'>
            {
                shuffledImages.map((name,index) =>
                    <img 
                    key={index} 
                    className="card-img" 
                    src={flippedCards.includes(index) ? name : dos} 
                    alt=""
                    onClick={() => handleCardClick(index)}/>
                )
            };
        </div>
    )
}

export default Card;

