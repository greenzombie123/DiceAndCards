import { useState } from "react";
import { Card, Deck } from "../Model/Cards";
import Tabs from "./Tabs";


type SliderPosition = {current:number, max:number}

const CardSlider = () => {
    const [cards, useCards] = useState<Card[]>([])
    const [currentDeck, useCurrentDeck] = useState<Deck>("barbarian")
    const [sliderPosition, useSliderPosition] = useState<SliderPosition>({current:0,max:0})

  return <div className="cardSlider">
    <Tabs currentDeck="barbarian"/>
  </div>;
};

export default CardSlider;
