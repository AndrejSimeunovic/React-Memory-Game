import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([...cardImages, ...cardImages]);
  const [pairs, setPair] = useState([]);
  const [oneFlipped, setOneFlipped] = useState(false);
  const [turns, setTurns] = useState(0);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  useEffect(() => {
    const mountCards = shuffle([...cards]);
    setCards(mountCards);
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleCheck = (cardElement) => {
    setTurns(turns + 1);
    if (!oneFlipped) {
      setPair([...pairs, cardElement]);
      setOneFlipped(true);
    } else {
      if (pairs[pairs.length - 1].src === cardElement.src) {
        //isMatch
        setOneFlipped(false);
        setPair([...pairs, cardElement]);
      } else {
        // noMatch
        setOneFlipped(false);
        setPair([...pairs, cardElement]);
        setTimeout(() => {
          let filter = pairs.filter(
            (card) =>
              card.id !== pairs[pairs.length - 1].id &&
              pairs[pairs.length - 2].id
          );
          setPair(filter);
        }, 1000);
      }
    }
  };
  return (
    <div className="App">
      <h2>Magic Match</h2>
      <button onClick={refreshPage}>New Game</button>
      <GameBoard cardImages={cards} handleCheck={handleCheck} pairs={pairs} />
      <h3>Turns: {turns}</h3>
    </div>
  );
}

export default App;
