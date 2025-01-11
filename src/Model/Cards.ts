export type Card = {
    deck:Deck,
    name:string,
    img:string,
    isDisplayed:boolean
}

export type Deck = "barbarian" |"sage"|"druid"|"berserker"|"pro"|"builder"

const cards:Card[] = [
    {deck:"sage", name:"Dicify", img:"../../public/cardImages/Dicify.jpg", isDisplayed:true},
    {deck:"sage", name:"ElectricArc", img:"../../public/cardImages/ElectricArc.jpg", isDisplayed:true},
    {deck:"sage", name:"MagicSoil", img:"../../public/cardImages/MagicSoil.jpg", isDisplayed:true},
    {deck:"sage", name:"ShockWave", img:"public/cardImages/ShockWave.jpg", isDisplayed:false},
    {deck:"sage", name:"Collapse", img:"public/cardImages/Collapse.png", isDisplayed:true},
    {deck:"sage", name:"Balance Tweak", img:"public/cardImages/BalanceTweak.png", isDisplayed:false},
    {deck:"sage", name:"Total Disorientation", img:"public/cardImages/TotalDisorientation.png", isDisplayed:false},
    {deck:"sage", name:"Card Of Many Things", img:"public/cardImages/CardOfManyThings.png", isDisplayed:true},
    
]

export default cards