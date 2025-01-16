export type Card = {
    deck:Deck,
    name:string,
    img:string,
    isDisplayed:boolean
}

export type Deck = "barbarian" |"sage"|"druid"|"builder"

const cards:Card[] = [
    {deck:"sage", name:"Dicify", img:"/cardImages/Dicify.jpg", isDisplayed:true},
    {deck:"sage", name:"Balance Tweak", img:"/cardImages/BalanceTweak.png", isDisplayed:true},
    {deck:"sage", name:"Electric Arc", img:"/cardImages/ElectricArc.jpg", isDisplayed:true},
    {deck:"sage", name:"Shock Wave", img:"/cardImages/ShockWave.jpg", isDisplayed:true},
    {deck:"sage", name:"Magic Soil", img:"/cardImages/MagicSoil.jpg", isDisplayed:true},
    {deck:"sage", name:"Collapse", img:"/cardImages/Collapse.png", isDisplayed:false},
    {deck:"sage", name:"Total Disorientation", img:"/cardImages/TotalDisorientation.png", isDisplayed:false},
    {deck:"sage", name:"Card Of Many Things", img:"/cardImages/CardOfManyThings.png", isDisplayed:false},
    
]

export default cards