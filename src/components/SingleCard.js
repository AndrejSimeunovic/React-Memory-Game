import "./GameBoard.css";

function SingleCard(props) {
  const handleClick = () => {
    let card = { src: props.card.src, id: props.index };
    props.handleCheck(card);
  };

  return (
    <div
      key={props.index}
      id={props.index}
      className={`flip-card ${props.flip ? "flip" : ""}`}
    >
      <div className="flip-card-front" onClick={handleClick}>
        <img src="../img/cover.png" alt="Avatar" />
      </div>
      <div className={`flip-card-back ${props.flip ? "flip" : ""}`}>
        <img src={props.card.src} alt="Avatar" />
      </div>
    </div>
  );
}

export default SingleCard;
