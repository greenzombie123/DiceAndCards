import { Card } from "../Model/Cards";
import { SliderPosition } from "./CardSlider";

interface InnerSliderProps {
  cards: Card[];
  sliderPosition: SliderPosition;
}

const InnerSlider = (props: InnerSliderProps) => {
  const { cards, sliderPosition } = props;

  return (
    <div className="sliderContainer">
      <div className="slider">
        <div className="sliderItem"></div>
        <div className="sliderItem"></div>
        <div className="sliderItem"></div>
        <div className="sliderItem"></div>
      </div>
    </div>
  );
};

export default InnerSlider
