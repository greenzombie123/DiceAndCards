import { Card, Deck } from "../Model/Cards";
import { SliderPosition } from "./CardSlider";
import InnerSlider from "./InnerSlider";

interface SliderProps {
  currentDeck: Deck;
  cards: Card[];
  sliderPosition: SliderPosition;
}

const Slider = ({ currentDeck, cards, sliderPosition }: SliderProps) => {
  const backgroundColor =
    currentDeck === "barbarian"
      ? "red"
      : currentDeck === "sage"
      ? "blue"
      : currentDeck === "builder"
      ? "lightBlue"
      : "green";


// Render the arrow buttons based on the inner sliders's position
  const leftArrow = sliderPosition.current !== 0 && (
    <button className="leftButton"></button>
  );

  const rightArrow = (sliderPosition.max !== 0 && sliderPosition.current !== sliderPosition.max) && (
    <button className="rightButton"></button>
  );

  return <div className={`${backgroundColor + " sliderContainer"}`}>
    <InnerSlider cards={cards} sliderPosition={sliderPosition} currentDeck={currentDeck}/>
  </div>;
};

export default Slider;
