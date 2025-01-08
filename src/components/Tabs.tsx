import { Deck } from "../Model/Cards";

interface TabsProps {
    currentDeck:Deck
}

type Tab = "current tab" | "tab"

const Tabs = ({currentDeck}: TabsProps) => {

    const barbarianTab: Tab = currentDeck === "barbarian" ? "current tab" : "tab"
    const sageTab: Tab = currentDeck === "sage" ? "current tab" : "tab"
    const builderTab: Tab = currentDeck === "builder" ? "current tab" : "tab"
    const druidTab: Tab = currentDeck === "druid" ? "current tab" : "tab"
    
    return <ul className="tabs">
        <li className={barbarianTab}>Barbarian</li>
        <li className={sageTab}>Sage</li>
        <li className={druidTab}>Druid</li>
        <li className={builderTab}>Builder</li>
    </ul>
};

export default Tabs;
