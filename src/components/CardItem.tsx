import { Card } from "../Model/Cards";

interface CardProps {
//   onClick: () => void;
  card: Card;
}

const CardItem = (props: CardProps) => {
  const {card} = props

  return <div key={card.name} className="sliderItem">
    <div className="cardItem">
      <button></button>
      <div className="imgContainer">
        <img src={card.img} alt="" />
      </div>
      <p></p>
    </div>
  </div>;
};

export default CardItem;
