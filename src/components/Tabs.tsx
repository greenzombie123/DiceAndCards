import { Deck } from "../Model/Cards";

interface TabsProps {
  currentDeck: Deck;
  onTabClick: (deck: Deck) => () => void;
}

type Tab =
  | "current tab red"
  | "current tab blue"
  | "current tab lightBlue"
  | "current tab green"
  | "tab";

const Tabs = ({ currentDeck, onTabClick }: TabsProps) => {

// Give each li element their proper className. THe current deck will give that li element 
// the current and color class names

  const barbarianTab: Tab =
    currentDeck === "barbarian" ? "current tab red" : "tab";

  const sageTab: Tab = currentDeck === "sage" ? "current tab blue" : "tab";

  const builderTab: Tab =
    currentDeck === "builder" ? "current tab lightBlue" : "tab";

  const druidTab: Tab = currentDeck === "druid" ? "current tab green" : "tab";

  // Tabs that are not the current deck will recieve the eventHandler to change the current deck state
  // The current tab will not recieve an eventHandler (an undefined)

  const onBarbarianTabClick = "barbarian" !== currentDeck ? onTabClick("barbarian") : undefined 
  const onSageTabClick = "sage" !== currentDeck ? onTabClick("sage") : undefined 
  const onBuilderTabClick = "builder" !== currentDeck ? onTabClick("builder") : undefined 
  const onDruidTabClick = "druid" !== currentDeck ? onTabClick("druid") : undefined 

  return (
    <ul className="tabs">
      <li className={barbarianTab} onClick={onBarbarianTabClick}>Barbarian</li>
      <li className={sageTab} onClick={onSageTabClick}>Sage</li>
      <li className={druidTab} onClick={onDruidTabClick}>Druid</li>
      <li className={builderTab} onClick={onBuilderTabClick}>Builder</li>
    </ul>
  );
};

export default Tabs;
