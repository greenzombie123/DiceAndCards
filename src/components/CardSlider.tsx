import { useState } from "react";
import { Card, Deck } from "../Model/Cards";
import Tabs from "./Tabs";
import Slider from "./Slider";
import cards from "../Model/Cards";

const k = cards;

export type SliderPosition = { current: number; max: number };

const CardSlider = () => {
  const [cards, setCards] = useState<Card[]>(k);
  const [currentDeck, setCurrentDeck] = useState<Deck>("sage");
  const [sliderPosition, setSliderPosition] = useState<SliderPosition>({
    current: 0,
    max: 0,
  });

  const handleTabClick = (deck: Deck) => () => setCurrentDeck(deck);

  return (
    <div className="cardSlider">
      <Tabs currentDeck={currentDeck} onTabClick={handleTabClick}/>
      <Slider
        currentDeck={currentDeck}
        cards={cards}
        sliderPosition={sliderPosition}
      />
    </div>
  );
};

export default CardSlider;
