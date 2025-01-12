import React from "react";

interface CardSelectorProps {
  cardNames: string[];
}

const CardSelector = (props: CardSelectorProps) => {
  const { cardNames } = props;

  // Render options of the cards of the current deck into the select element
  const cardOptions: React.ReactNode = cardNames.map((name) => (
    <option value={name} key={name}>
      {name}
    </option>
  ));

  return (
    <div className="sliderItem">
      <div className="cardSelector">
        <div className="top">
          <p>Add Card</p>
          <select name="cardSelector" id="cardSelector">
            <option value="">--Please select a card--</option>
            {cardOptions}
          </select>
        </div>
        <button>Add</button>
      </div>
    </div>
  );
};

export default CardSelector;
