console.log('this is going to WORK!')

const startButton = document.querySelector('#deal')
console.log(startButton)

const resetButton = document.querySelector('#reset')
console.log(resetButton)

const playButton = document.querySelector('#play')
console.log(playButton)

const VALUES = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const SUITS = ['Hearts', 'Diamonds','Clubs','Spades'];
const player1 = []
const player2 = []
let deck = []
const player1Cards = []
const player2Cards = []


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

    console.log(deck)
    shuffleDeck()
    dealDeck()
    // compareCards()
}

function shuffleDeck(){
    let shuffleDeck = []
    while (deck.length > 0){
        let randomIndex = Math.floor(deck.length * Math.random());
        const chosenCard = deck.splice(randomIndex, 1)[0]
        shuffleDeck.push(chosenCard)

    }
    deck = shuffleDeck
}

function dealDeck () {
    // let dealDeck = []
    while (deck.length > 0) {
        player1.push(deck.pop());
        player2.push(deck.pop());
    }
    console.log(player1)
    console.log(player2)
    
}

function playDeck() {
    let turnDeck =[]
console.log(player1)

    if(player1[0].value == player2[1].value) {
        console.log('tie')
    }
    if (player1[0].value< player2[1].value){
        console.log('lose')
    }
    if (player1[0].value > player2[1].value){
       console.log('win')
    }
    // console.log(turnDeck)

}

// }

// function compareCards() {
//     let calCards = []
    
//     while (player1.value > player2.value){
//         console.log('Player 1 wins round')
//     }
//     if (player2.value > player1.value){
//         console.log('Player 2 wins round')
//     }

// }

// I want to assess the values of the cards and return the winner or tie 


    


        
    
    
    


startButton.addEventListener('click', createDeck)
playButton.addEventListener('click', playDeck)

// resetButton.addEventListener('click', '')
// I want to call my reset button here.^^ 
// I need a play method (pulls from the end of the array),Add a war function 
//(I want my reset button to clear the playing field after a winner is declared)
//

