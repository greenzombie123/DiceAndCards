export type Card = {
    deck:Deck,
    name:string,
    img:string,
    isDisplayed:boolean
}

export type Deck = "barbarian" |"sage"|"druid"|"berserker"|"pro"|"builder"

const cards:Card[] = [
    {deck:"barbarian", name:"something", img:"something", isDisplayed:false},
]

export default cards