import "./GameBoard.css";
import SingleCard from "./SingleCard";

function GameBoard(props) {
  return (
    <div className="grid-container">
      {props.cardImages.map((card, index) => {
        return (
          <SingleCard
            key={index}
            card={card}
            index={index}
            handleCheck={props.handleCheck}
            flip={props.pairs.some((card) => card.id === index)}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;
