console.log('this is going to WORK!')
const startButton = document.querySelector('.deal')
console.log(startButton)


// I need cards and players 
const VALUES = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const SUITS = ['Hearts', 'Diamonds','Clubs','Spades'];
const player1 = []
const player2 = []
let deck = []

// I need a card object 
class Card {
    constructor(value,suit) {
        this.value = value,
        this.suit = suit
    }
}
// I need a deck object with fuctions to shuffle and deal
function shuffleDeck () {
    console.log('shuffleDeck')
}

function createDeck (){
    deck = [];
        for (let i = 0; i < SUITS.length; i++) {
            for (let j = 0; j < VALUES.length; j++) {
                // console.log(VALUES[j], SUITS[i])
                const card = {
                    value: VALUES[j],
                    suit: SUITS[i]
                }
                deck.push(card)
            }
        }
// console.log(deck)
shuffleDeck()
}
startButton.addEventListener('click', createDeck)
// createDeck()
// console.log(deck)

// I need to have win parameters 




