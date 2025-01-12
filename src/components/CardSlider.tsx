import React, { useState } from "react";
import { Card, Deck } from "../Model/Cards";
import Tabs from "./Tabs";
import Slider from "./Slider";
import cards from "../Model/Cards";

const k = cards;

export type SliderPosition = { current: number; max: number };
export type ChangeEvent = React.ChangeEvent<HTMLSelectElement>

const CardSlider = () => {
  const [cards, setCards] = useState<Card[]>(k);
  const [selected, setSelected] = useState<string>("")
  const [currentDeck, setCurrentDeck] = useState<Deck>("sage");
  const [sliderPosition, setSliderPosition] = useState<SliderPosition>({
    current: 0,
    max: 0,
  });

  const handleTabClick = (deck: Deck) => () => setCurrentDeck(deck);

  const handleOptionClick = (event:ChangeEvent)=>setSelected(event.target.value)

  const handleAddButtonClick = ()=>{
    if(selected === "") return 
    const card = findCard(selected)
    if(!card)return
    const newCards = [...cards].map(newCard=> newCard.name === card.name ? {...newCard, isDisplayed:true }: newCard) 
    setCards(newCards)
  }

  const findCard = (name:string)=> cards.find(card=>card.name === name)

  return (
    <div className="cardSlider">
      <Tabs currentDeck={currentDeck} onTabClick={handleTabClick}/>
      <Slider
        currentDeck={currentDeck}
        cards={cards}
        sliderPosition={sliderPosition}
        onChange={handleOptionClick}
        onAddButtonClick={handleAddButtonClick}
      />
    </div>
  );
};

export default CardSlider;
