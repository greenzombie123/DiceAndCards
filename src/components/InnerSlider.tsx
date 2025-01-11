import React from "react";
import { Card, Deck } from "../Model/Cards";
import CardItem from "./CardItem";
import CardSelector from "./CardSelector";
import { SliderPosition } from "./CardSlider";

interface InnerSliderProps {
  cards: Card[];
  sliderPosition: SliderPosition;
  currentDeck: Deck;
}

const InnerSlider = (props: InnerSliderProps) => {
  const { cards, sliderPosition, currentDeck } = props;

  // Gets cards by deck and get the cards that are being displayed
  const cardsByDeck: Card[] = cards.filter((card) => card.deck === currentDeck);

  const displayedCards: JSX.Element[] = cardsByDeck
    .filter((card) => card.isDisplayed)
    .map((card) => <CardItem key={card.name} card={card} />);

  // Get the name of cards that will be displayed in the select element
  const cardSelectorCardList: string[] = cardsByDeck
    .filter((card) => !card.isDisplayed)
    .map((card) => card.name);

  // Create CardSelector in advance and pass card name list
  const cardSelector = (
    <CardSelector key={"cardSelector"} cardNames={cardSelectorCardList} />
  );

  // Confirm the number of slides in the slider
  const numOfSlides = Math.ceil(displayedCards.length / 5) || 1;

  // Will be used to place slides in it and finally passed as children to this component.
  const slides: JSX.Element[] = [];

  // Used to insure that every CardItem is placed in the correct slide.
  let cardCount: number = 0;

  console.log(
    numOfSlides,
    displayedCards.length,
    Math.floor(Math.ceil(displayedCards.length / 5) || 1)
  );


  // Loop through each slide
  for (let slideIndex = 1; slideIndex <= numOfSlides; slideIndex++) {
    const slideItems: JSX.Element[] = [];

    // Place card items in the current slide
    for (let index = 0; index < 5; index++) {
      if (displayedCards[cardCount]) {
        slideItems.push(displayedCards[cardCount]);
        cardCount++;
      }
    }

    // If this is the last slide and there is less than 5 items in the slide, put the CardSelector in it
    if (slideIndex === numOfSlides && slideItems.length !== 5) {
      slideItems.push(cardSelector);

      const slide = (
        <div key={slideIndex} className="slide" id={`${slideIndex}`}>
          {slideItems}
        </div>
      );

      slides.push(slide);
    }
    // If this is the last slide and there is exactly 5 items in the slide, create a new slide and put the Card Selector in it
    else if (slideIndex === numOfSlides && slideItems.length === 5) {
      const slide = (
        <div key={slideIndex} className="slide" id={`${slideIndex}`}>
          {slideItems}
        </div>
      );

      slides.push(slide);

      const newSlide = (
        <div key={slideIndex + 1} className="slide" id={`${slideIndex + 1}`}>
          {cardSelector}
        </div>
      );

      slides.push(newSlide);
    }
    // If there are more card items to render besides these 5, put the 5 in the current slide and move to the next loop.
    else {
      const slide = (
        <div key={slideIndex} className="slide" id={`${slideIndex}`}>
          {slideItems}
        </div>
      );

      slides.push(slide);
    }
  }

  return (
    <div className="slideContainer">
      <div className="slider">{slides}</div>
    </div>
  );
};

export default InnerSlider;
