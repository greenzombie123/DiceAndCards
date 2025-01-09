import { useState } from "react";
import { Card, Deck } from "../Model/Cards";
import Tabs from "./Tabs";
import Slider from "./Slider";


export type SliderPosition = {current:number, max:number}

const CardSlider = () => {
    const [cards, useCards] = useState<Card[]>([])
    const [currentDeck, useCurrentDeck] = useState<Deck>("builder")
    const [sliderPosition, useSliderPosition] = useState<SliderPosition>({current:0,max:0})

  return <div className="cardSlider">
    <Tabs currentDeck={currentDeck}/>
    <Slider currentDeck={currentDeck} cards={cards} sliderPosition={sliderPosition}/>
  </div>;
};

export default CardSlider;
