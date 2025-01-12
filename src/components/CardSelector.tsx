import React from "react";
import { Card } from "../Model/Cards";
import { ChangeEvent } from "./CardSlider";

interface CardSelectorProps {
  cardNames: Card[];
  onChange:(event:ChangeEvent)=>void,
  onAddButtonClick:()=>void
}

const CardSelector = (props: CardSelectorProps) => {
  const { cardNames, onChange, onAddButtonClick } = props;

  // Render options of the cards of the current deck into the select element
  const cardOptions: React.ReactNode = cardNames.map((card) => (
    <option value={card.name} key={card.name}>
      {card.name}
    </option>
  ));

  return (
    <div className="sliderItem">
      <div className="cardSelector">
        <div className="top">
          <p>Add Card</p>
          <select name="cardSelector" id="cardSelector" onChange={onChange}>
            <option value="">--Please select a card--</option>
            {cardOptions}
          </select>
        </div>
        <button onClick={onAddButtonClick}>Add</button>
      </div>
    </div>
  );
};

export default CardSelector;
