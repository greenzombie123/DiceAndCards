export type Card = {
    deck:Deck,
    name:string,
    img:string,
    isDisplayed:boolean
}

export type Deck = "barbarian" |"sage"|"druid"|"builder"

// const cards:Card[] = [
//     {deck:"sage", name:"Dicify", img:"/cardImages/Dicify.jpg", isDisplayed:false},
//     {deck:"sage", name:"Balance Tweak", img:"/cardImages/BalanceTweak.png", isDisplayed:false},
//     {deck:"sage", name:"Electric Arc", img:"/cardImages/ElectricArc.jpg", isDisplayed:false},
//     {deck:"sage", name:"Shock Wave", img:"/cardImages/ShockWave.jpg", isDisplayed:false},
//     {deck:"sage", name:"Magic Soil", img:"/cardImages/MagicSoil.jpg", isDisplayed:false},
//     {deck:"sage", name:"Collapse", img:"/cardImages/Collapse.png", isDisplayed:false},
//     {deck:"sage", name:"Total Disorientation", img:"/cardImages/TotalDisorientation.png", isDisplayed:false},
//     {deck:"sage", name:"Card Of Many Things", img:"/cardImages/CardOfManyThings.png", isDisplayed:false},
    
// ]

const barbarianModule:{[key:string]:{default:string}} = import.meta.glob('/src/assets/barbarian/*', {eager:true})

const barbarianCards:Card[] = []

for (const key in barbarianModule) {
    barbarianCards.push({deck:"barbarian", name:key.slice(22,-4), img:barbarianModule[key].default, isDisplayed:false })
}

const druidModule:{[key:string]:{default:string}} = import.meta.glob('/src/assets/druid/*', {eager:true})

const druidCards:Card[] = []

for (const key in druidModule) {
    druidCards.push({deck:"druid", name:key.slice(18,-4), img:druidModule[key].default, isDisplayed:false })
}

const sageModule:{[key:string]:{default:string}} = import.meta.glob('/src/assets/sage/*', {eager:true})

const sageCards:Card[] = []

for (const key in sageModule) {
    sageCards.push({deck:"sage", name:key.slice(17,-4), img:sageModule[key].default, isDisplayed:false })
}

const builderModule:{[key:string]:{default:string}} = import.meta.glob('/src/assets/builder/*', {eager:true})

const builderCards:Card[] = []

for (const key in builderModule) {
    builderCards.push({deck:"builder", name:key.slice(20,-4), img:builderModule[key].default, isDisplayed:false })
}

const cards = [
    ...barbarianCards,
    ...druidCards,
    ...builderCards,
    ...sageCards
]

console.log(cards)

export default cards