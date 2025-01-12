import { Card, Deck } from "../Model/Cards";
import { ChangeEvent, SliderPosition } from "./CardSlider";
import InnerSlider from "./InnerSlider";

interface SliderProps {
  currentDeck: Deck;
  cards: Card[];
  sliderPosition: SliderPosition;
  onChange:(event:ChangeEvent)=>void,
  onAddButtonClick:()=>void
}

const Slider = ({ currentDeck, cards, sliderPosition, onChange, onAddButtonClick }: SliderProps) => {
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
    <InnerSlider cards={cards} sliderPosition={sliderPosition} currentDeck={currentDeck} onChange={onChange} onAddButtonClick={onAddButtonClick}/>
  </div>;
};

export default Slider;
