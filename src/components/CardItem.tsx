import { Card } from "../Model/Cards";

interface CardProps {
  onDeleteButtonClick: (name: string) => () => void;
  card: Card;
}

const CardItem = (props: CardProps) => {
  const {card, onDeleteButtonClick} = props

  return <div key={card.name} className="sliderItem">
    <div className="cardItem">
      <button onClick={onDeleteButtonClick(card.name)}>X</button>
      <div className="imgContainer">
        <img src={card.img} alt="" />
        
      <p>{card.name}</p>
      </div>
    </div>
  </div>;
};

export default CardItem;
