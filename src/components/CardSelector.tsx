import React from "react";
import { Card } from "../Model/Cards";

interface CardSelectorProps {
  cards: Card[];
}

const CardSelector = (props: CardSelectorProps) => {
  const { cards } = props;

  // Render options of the cards of the current deck into the select element
  const cardOptions: React.ReactNode = cards.map((card) => <option value={card.name}>{card.name}</option>);

  return (
    <div className="cardSelector">
      <p>Add Card</p>
      <select name="cardSelector" id="cardSelector">
        <option value="">--Please select a card--</option>
        {cardOptions}
      </select>
      <button>Add</button>
    </div>
  );
};

export default CardSelector;
