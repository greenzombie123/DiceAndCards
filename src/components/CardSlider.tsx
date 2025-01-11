import { useState } from "react";
import { Card, Deck } from "../Model/Cards";
import Tabs from "./Tabs";
import Slider from "./Slider";
import  cards from "../Model/Cards";

const k = cards

export type SliderPosition = {current:number, max:number}

const CardSlider = () => {
    const [cards, useCards] = useState<Card[]>(k)
    const [currentDeck, useCurrentDeck] = useState<Deck>("sage")
    const [sliderPosition, useSliderPosition] = useState<SliderPosition>({current:0,max:0})

  return <div className="cardSlider">
    <Tabs currentDeck={currentDeck}/>
    <Slider currentDeck={currentDeck} cards={cards} sliderPosition={sliderPosition}/>
  </div>;
};

export default CardSlider;
