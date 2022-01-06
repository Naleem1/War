console.log('this is going to WORK!')

const startButton = document.querySelector('#deal')
console.log(startButton)

const resetButton = document.querySelector('#reset')
console.log(resetButton)



const VALUES = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const SUITS = ['Hearts', 'Diamonds','Clubs','Spades'];
const player1 = []
const player2 = []
let deck = []


class Card {
    constructor(value,suit) {
        this.value = value,
        this.suit = suit
    }
}


function createDeck (){
    deck = [];
        for (let i = 0; i < SUITS.length; i++) {
            for (let j = 0; j < VALUES.length; j++) {

                const card = {
                    value: VALUES[j],
                    suit: SUITS[i]
                }
                deck.push(card)
            }
        }
        shuffleDeck()
        console.log(deck)

}

function shuffleDeck(){
    let shuffleDeck = []
    while (deck.length > 0){
        let randomIndex = Math.floor(deck.length * Math.random());
    
        shuffleDeck.push(deck[randomIndex])
        deck.splice(randomIndex, 1)
    }
    deck = shuffleDeck
}


startButton.addEventListener('click', createDeck)
console.log(deck)





