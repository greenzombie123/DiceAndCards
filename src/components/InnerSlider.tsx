import React, { useEffect, useRef } from "react";
import { Card, Deck } from "../Model/Cards";
import CardItem from "./CardItem";
import CardSelector from "./CardSelector";
import { ChangeEvent, SliderPositions } from "./CardSlider";

interface InnerSliderProps {
  cards: Card[];
  sliderPositions: SliderPositions;
  currentDeck: Deck;
  onChange:(event:ChangeEvent)=>void,
  onAddButtonClick:()=>void,
  onDeleteButtonClick: (name: string) => () => void;
}

const InnerSlider = (props: InnerSliderProps) => {
  const { cards, sliderPositions, currentDeck, onChange, onAddButtonClick, onDeleteButtonClick } = props;
  const {current} = sliderPositions[currentDeck]
  const slideRef = useRef<HTMLDivElement|null>(null)

  // Gets cards by deck and get the cards that are being displayed
  const cardsByDeck: Card[] = cards.filter((card) => card.deck === currentDeck);

  const displayedCards: JSX.Element[] = cardsByDeck
    .filter((card) => card.isDisplayed)
    .map((card) => <CardItem key={card.name} onDeleteButtonClick={onDeleteButtonClick} card={card} />);

  // Get the name of cards that will be displayed in the select element
  const cardSelectorCardList: Card[] = cardsByDeck
    .filter((card) => !card.isDisplayed)

  // Create CardSelector in advance and pass card name list
  const cardSelector = (
    <CardSelector key={"cardSelector"} onAddButtonClick={onAddButtonClick} onChange={onChange} cardNames={cardSelectorCardList} />
  );

  // Confirm the number of slides in the slider
  const numOfSlides = Math.ceil(displayedCards.length / 5) || 1;

  // Will be used to place slides in it and finally passed as children to this component.
  const slides: JSX.Element[] = [];

  // Used to insure that every CardItem is placed in the correct slide.
  let cardCount: number = 0;

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

    // If the slide matches the deck's sliderPosition's current, pass the ref value
    const ref = slideIndex === sliderPositions[currentDeck].current ? slideRef : null

    // If a new slide is needed to insert only card selector and that slide becomes the new curruent slide, 
    // pass the ref value
    const onlyCardSelectorSlideRef = slideIndex + 1 === sliderPositions[currentDeck].current ? slideRef : null
    console.log("slideIndex: ", slideIndex, "current: ", sliderPositions[currentDeck].current)

    // If this is the last slide and there is less than 5 items in the slide, put the CardSelector in it
    if (slideIndex === numOfSlides && slideItems.length !== 5) {
      slideItems.push(cardSelector);

      const slide = (
        <div ref={ref} key={slideIndex} className="slide" id={`${slideIndex}`}>
          {slideItems}
        </div>
      );

      slides.push(slide);
    }
    
    // If this is the last slide and there is exactly 5 items in the slide, create a new slide and put the Card Selector in it
    else if (slideIndex === numOfSlides && slideItems.length === 5) {
      const slide = (
        <div ref={ref} key={slideIndex} className="slide" id={`${slideIndex}`}>
          {slideItems}
        </div>
      );

      slides.push(slide);

      
      const newSlide = (
        <div ref={onlyCardSelectorSlideRef} key={slideIndex + 1} className="slide" id={`${slideIndex + 1}`}>
          {cardSelector}
        </div>
      );

      slides.push(newSlide);
    }
    // If there are more card items to render besides these 5, put the 5 in the current slide and move to the next loop.
    else {
      const slide = (
        <div ref={ref} key={slideIndex} className="slide" id={`${slideIndex}`}>
          {slideItems}
        </div>
      );

      slides.push(slide);
    }
  }

  // Move the slider to the current slide when either the arrow buttons are pressed or a different deck tab was 
  // pressed

  useEffect(()=>{
    if(slideRef.current){
        const currentSlide = slideRef.current

        currentSlide.scrollIntoView({
            inline:"start",
            behavior:"smooth"
        })
    }
  },[current])

  useEffect(()=>{
    if(slideRef.current){
        const currentSlide = slideRef.current

        currentSlide.scrollIntoView({
            inline:"start",
            behavior:"instant"
        })
    }
  },[currentDeck])

  return (
    <div className="slideContainer">
      <div className="slider">{slides}</div>
    </div>
  );
};

export default InnerSlider;
