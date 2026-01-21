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

    const dos = '/assets/img/dos.jpg';

    // Fonction pour mélanger un tableau
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // États
    const [shuffledImages, setShuffledImages] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [isChecking, setIsChecking] = useState(false);

    // Initialisation du jeu
    useEffect(() => {
        const pairs = images.flatMap(img => [img, img]);
        setShuffledImages(shuffleArray(pairs));
    }, []);

    // Vérification des paires
    useEffect(() => {
        if (flippedCards.length === 2) {

            // lenght = compter les chaines de caractères.
            setIsChecking(true);
            const [firstIndex, secondIndex] = flippedCards;

            if (shuffledImages[firstIndex] === shuffledImages[secondIndex]) {
                // Les cartes correspondent
                setMatchedCards([...matchedCards, firstIndex, secondIndex]);
                setFlippedCards([]);
                setIsChecking(false);
            } else {
                // Les cartes ne correspondent pas
                setTimeout(() => {
                    setFlippedCards([]);
                    setIsChecking(false);
                }, 1000);
            }
        }
        console.log(flippedCards);
    }, [flippedCards, shuffledImages, matchedCards]);

    // Gestion du clic sur une carte
    const handleCardClick = (index) => {
        console.log("handleCardClick:", index);
        if (
            !isChecking &&
            flippedCards.length < 2 &&
            !flippedCards.includes(index) &&
            !matchedCards.includes(index)
        ) {
            setFlippedCards([...flippedCards, index]);
        }

    };

    return (
        <div className='card'>
            {
                shuffledImages.map((name, index) => (
                    <img
                        key={index}
                        className="card-img"
                        src={flippedCards.includes(index) || matchedCards.includes(index) ? name : dos}
                        alt=""
                        onClick={() => handleCardClick(index)}
                    />
                ))
            }
        </div>
    );
}

export default Card;