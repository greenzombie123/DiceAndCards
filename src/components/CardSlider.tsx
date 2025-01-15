import React, { useState } from "react";
import { Card, Deck } from "../Model/Cards";
import Tabs from "./Tabs";
import Slider from "./Slider";
import cards from "../Model/Cards";

const k = cards;
// const currentDisplayedCards:Card[] = cards.filter(card=> card.isDisplayed && card.deck === currentDeck)
//     currentDisplayedCards.push(card)

export type SliderPosition = {
  current: number;
  max: number;
};

export type SliderPositions = {
  barbarian: SliderPosition;
  druid: SliderPosition;
  sage: SliderPosition;
  builder: SliderPosition;
};
export type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;
const sliderPositionSet: SliderPositions = {
  barbarian: { current: 1, max: 1 },
  druid: { current: 1, max: 1 },
  sage: { current: 1, max: 1 },
  builder: { current: 1, max: 1 },
};

const CardSlider = () => {
  const [cards, setCards] = useState<Card[]>(k);
  const [selected, setSelected] = useState<string>("");
  const [currentDeck, setCurrentDeck] = useState<Deck>("sage");
  const [sliderPositions, setSliderPositions] =
    useState<SliderPositions>(sliderPositionSet);

  const handleTabClick = (deck: Deck) => () => setCurrentDeck(deck);

  const handleOptionClick = (event: ChangeEvent) =>
    setSelected(event.target.value);

  const handleAddButtonClick = () => {
    // Return if no card is selected or that card is not found
    if (selected === "") return;
    const card = findCard(selected);
    if (!card) return;

    // Change the chosen card's isDisplayed to true and change the max slide of the slider position
    const newCards = [...cards].map((newCard) =>
      newCard.name === card.name ? { ...newCard, isDisplayed: true } : newCard
    );
    setCards(newCards);

    // Reset the selected value
    setSelected("")

    // Calculate the max slides of the current deck and update the current slide's slider positions

    const currentDisplayedCards: Card[] = cards.filter(
      (card) => card.isDisplayed && card.deck === currentDeck
    );
    currentDisplayedCards.push(card);

    // Add 1 to take the card selector into account
    const maxSlides = Math.ceil((currentDisplayedCards.length + 1)/ 5);

    const newSliderPositions: SliderPositions = { ...sliderPositions };
    newSliderPositions[currentDeck].max = maxSlides;

    // console.log("slides", newSliderPositions, maxSlides, currentDisplayedCards.length)

    setSliderPositions(newSliderPositions);
  };

  const handleArrowButtonClick = (slideIndex: number) => () => {
    const newSliderPositions: SliderPositions = { ...sliderPositions };
    const { current } = newSliderPositions[currentDeck];
    newSliderPositions[currentDeck].current = current + slideIndex;

    console.log("slideIndex now: ", current + slideIndex)

    setSliderPositions(newSliderPositions);
  };

  const findCard = (name: string) => cards.find((card) => card.name === name);

  return (
    <div className="cardSlider">
      <Tabs currentDeck={currentDeck} onTabClick={handleTabClick} />
      <Slider
        currentDeck={currentDeck}
        cards={cards}
        sliderPositions={sliderPositions}
        onChange={handleOptionClick}
        onAddButtonClick={handleAddButtonClick}
        onArrowButtonClick={handleArrowButtonClick}
      />
    </div>
  );
};

export default CardSlider;
