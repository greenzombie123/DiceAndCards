import { Card, Deck } from "../Model/Cards";
import { ChangeEvent, SliderPositions } from "./CardSlider";
import InnerSlider from "./InnerSlider";

interface SliderProps {
  currentDeck: Deck;
  cards: Card[];
  sliderPositions: SliderPositions;
  onChange: (event: ChangeEvent) => void;
  onAddButtonClick: () => void;
  onArrowButtonClick: (slideIndex: number) => () => void;
}

const Slider = ({
  currentDeck,
  cards,
  sliderPositions,
  onChange,
  onAddButtonClick,
  onArrowButtonClick,
}: SliderProps) => {
  const backgroundColor =
    currentDeck === "barbarian"
      ? "red"
      : currentDeck === "sage"
      ? "blue"
      : currentDeck === "builder"
      ? "lightBlue"
      : "green";

  const { current, max } = sliderPositions[currentDeck];
  const prevSlide = current - 1 >= 1 ? `#${current - 1}` : "";
  const nextSlide = current + 1 <= max ? `#${current + 1}` : "";

  // Render the arrow buttons based on the inner sliders's position
  const leftButton = sliderPositions[currentDeck].current !== 1 && (
    <button className="leftButton" onClick={onArrowButtonClick(-1)}></button>
  );

  const rightButton = sliderPositions[currentDeck].max !== 1 &&
    sliderPositions[currentDeck].current !==
      sliderPositions[currentDeck].max && (
      <button className="rightButton" onClick={onArrowButtonClick(1)}></button>
    );

  return (
    <div className={`${backgroundColor + " sliderContainer"}`}>
      {leftButton}
      <InnerSlider
        cards={cards}
        sliderPositions={sliderPositions}
        currentDeck={currentDeck}
        onChange={onChange}
        onAddButtonClick={onAddButtonClick}
      />
      {rightButton}
    </div>
  );
};

export default Slider;
