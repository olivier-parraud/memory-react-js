import { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Card from './components/Card/Card';

// Données des cartes - symboles emoji
const cardSymbols = ['🎮', '🎯', '🎨', '🎭', '🎪', '🎸', '🎲', '🎳'];

// Fonction pour créer et mélanger les cartes
const createCards = () => {
  const cards = [];
  cardSymbols.forEach((symbol, index) => {
    cards.push({
      id: index * 2,
      content: symbol,
      matched: false
    });
    cards.push({
      id: index * 2 + 1,
      content: symbol,
      matched: false
    });
  });
  
  // Mélanger les cartes (algorithme de Fisher-Yates)
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  
  return cards;
};

function App() {
  const [cards, setCards] = useState(createCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Vérifier si toutes les cartes sont trouvées
  useEffect(() => {
    const allMatched = cards.every(card => card.matched);
    if (allMatched && moves > 0) {
      setGameWon(true);
    }
  }, [cards, moves]);

  // Gérer le retournement des cartes
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      
      // Vérifier si les cartes correspondent
      if (first.content === second.content) {
        // Cartes identiques trouvées
        setCards(prevCards =>
          prevCards.map(card =>
            card.content === first.content
              ? { ...card, matched: true }
              : card
          )
        );
        setFlippedCards([]);
      } else {
        // Cartes différentes - les retourner après un délai
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
      
      setMoves(moves + 1);
    }
  }, [flippedCards]);

  // Gérer le clic sur une carte
  const handleCardClick = (card) => {
    // Ne rien faire si déjà 2 cartes retournées ou si la carte est déjà retournée
    if (flippedCards.length === 2 || flippedCards.find(c => c.id === card.id)) {
      return;
    }
    
    setFlippedCards([...flippedCards, card]);
  };

  // Relancer une nouvelle partie
  const resetGame = () => {
    setCards(createCards());
    setFlippedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  return (
    <div className="app">
      <Title text="🎮 Jeu Memory" subtitle="Trouvez toutes les paires!" />
      
      <div className="game-info">
        <p className="moves-counter">Coups joués: <strong>{moves}</strong></p>
      </div>

      <div className="game-board">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleCardClick={handleCardClick}
            isFlipped={
              flippedCards.find(c => c.id === card.id) !== undefined
            }
            isMatched={card.matched}
          />
        ))}
      </div>

      <div className="game-controls">
        <Button text="Nouvelle Partie" onClick={resetGame} />
      </div>

      {gameWon && (
        <div className="victory-modal">
          <div className="victory-content">
            <h2>🎉 Félicitations! 🎉</h2>
            <p>Vous avez gagné en <strong>{moves}</strong> coups!</p>
            <Button text="Rejouer" onClick={resetGame} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
