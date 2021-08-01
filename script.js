var firstCard, secondCard, sum;

let cards = [];

sum = 0;
let message = ''; 
let messageElem = document.getElementById('message-elem');
let sumElem = document.getElementById('sum-elem');
let cardsElem = document.getElementById('cards-elem');

var hasJackBlack = false;
let isAlive = false;

let player = {
    name: "Player",
    chips: 145
}

let playerElem = document.getElementById('player-el');
playerElem.textContent = player.name + " : $" + player.chips;

function startGame(){
    firstCard = getRandom();
    secondCard = getRandom();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
    isAlive = true;
    renderGame(); 
}

function getRandom(){
    var randomNumber = Math.floor(Math.random()*13) + 1;
    // if 1     -> return 11
    // if 11-13 -> return 10
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10){
        return 10;
    } else {
        return randomNumber;
    }
}

function renderGame(){
    cardsElem.textContent = 'Cards: ';

    for (let i = 0; i < cards.length; i++) {
        cardsElem.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if ( sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasJackBlack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    
    messageElem.textContent = message;
    sumElem.textContent = 'Sum: ' + sum;
}

function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive && !hasJackBlack) {
        let card = getRandom();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}
