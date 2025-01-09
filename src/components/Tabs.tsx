import { Deck } from "../Model/Cards";

interface TabsProps {
    currentDeck:Deck
}

type Tab = "current tab red" | "current tab blue" | "current tab lightBlue" | "current tab green" |"tab"

const Tabs = ({currentDeck}: TabsProps) => {

    const barbarianTab: Tab = currentDeck === "barbarian" ? "current tab red" : "tab"
    const sageTab: Tab = currentDeck === "sage" ? "current tab blue" : "tab"
    const builderTab: Tab = currentDeck === "builder" ? "current tab lightBlue" : "tab"
    const druidTab: Tab = currentDeck === "druid" ? "current tab green" : "tab"
    
    return <ul className="tabs">
        <li className={barbarianTab}>Barbarian</li>
        <li className={sageTab}>Sage</li>
        <li className={druidTab}>Druid</li>
        <li className={builderTab}>Builder</li>
    </ul>
};

export default Tabs;
