
//Below I created my cards and suits
let cards = ['2', '3', '4', '5', '6', '7', '8', '9','10', 'J', 'Q', 'K', 'A'];
let suits = ['#', '$', '%', '*'];

//Below I've created my deck of cards 
let deck = [];
for (let i=0; i < suits.length; i++) {
    for (let Q=0; Q < cards.length; Q++) {
        let newCard = {
            suit: suits[i],
            card: cards[Q],
             value: Q,
        }
        deck.push(newCard);
    }
}

console.log(deck);
console.log(deck[0].value,deck[1].value)

// Shuffle the deck using Fisher-Yates algorithm function
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i> 0; i--){
        const Q = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[Q]] =[deck[Q], deck[i]];
    }

}
//Shuffle the deck
shuffleDeck(deck);
console.log(deck);

//I created a function to deal cards to each player
function dealCard() {
    return deck.pop();
}

//Players names. Deals cards to each player.
let Ambrose = [];
let Deshawn = [];



let ambroseScore = [];
let deshawnScore = [];

// 
for (let i = 0; i < 26; i++) {
    if(ambroseScore > deshawnScore) {
        console.log
        ("Player Ambrose and Deshawn Ties");
    } else if(ambroseScore < deshawnScore) {
      console.log("Player Deshawn and Ambrose ties!");
      deshawnScore++;
    } else {
        console.log("it's a tie!");  
    }

    function compareCards(card1, card2) {
        const declareWinner = () =>{
        if (Ambrose.points > Deshawn.points) {
            return 'Ambrose';
        } else if (Ambrose < Deshawn) {
            return 'Deshawn';
        } else {
            return 'tie';
        }
    }
    }

        if(ambroseScore > deshawnScore) {
            console.log(`Ambrose wins with ${ambroseScore}points compared to ${deshawnScore}
            points!`);
        }
        else if(ambroseScore < deshawnScore) {
            console.log(`Deshawn wins with ${deshawnScore} points compared to ${ambroseScore}
            points!`);
        }
        else{
            console.log("It's a tie!");
        }
    }

    //Let's Play!
    for (let i = 0; i < 26; i++) {
        const card1 = Ambrose[i];
        const card2 = Deshawn[i];
        console.log(`Ambrose: ${card1} | Deshawn: ${card2}`);
        const winner = compareCards(card1, card2);
        if (winner === 'Ambrose') {
            ambroseScore += 1;
            console.log('Ambrose won the round!');
        } else if (winner === 'Deshawn') {
            console.log('Deshawn won the round!');
        } else {
            console.log('It is a tie!');
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
