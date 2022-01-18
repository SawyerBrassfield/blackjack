var cardTotal = 0
var cardNum = 0
var cardSuit = 0
var cardValue
var cardSuited
var cardNumber
var cardFinal
var aceAmount = 0
var bigImg = document.getElementById("bigimg")
var hits = 0
var cardStorage = []
var barCard
function suitPick() {
    cardNum = Math.floor(Math.random() * 13) + 1
    cardSuit = Math.floor(Math.random() * 4) + 1
    if(cardSuit == 1) {
        cardSuited = "S"
    }
    else if(cardSuit == 2) {
        cardSuited = "D"
    }
    else if(cardSuit == 3) {
        cardSuited = "H"
    }
    else if(cardSuit == 4) {
        cardSuited = "C"
    }
}
function valuePick() {
    if((cardNum < 10) && (cardNum > 1)) {
        cardValue = cardNum
        cardNumber = cardNum
    }
    else if(cardNum >= 10) {
        cardValue = 10
        if(cardNum == 10) {
            cardNumber = 10
        }
        else if(cardNum == 11) {
            cardNumber = "J"
        }
        else if(cardNum == 12) {
            cardNumber = "Q"
        }
        else if(cardNum == 13) {
            cardNumber = "K"
        }
    }
    else if(cardNum == 1) {
        cardNumber = "A"
        cardValue = 11
        aceAmount += 1
    }
    console.log(`you have drawn ${aceAmount} aces`)
}
function cardPick() {
    suitPick()
    valuePick()
    cardTotal += cardValue
    cardFinal = `${cardNumber}${cardSuited}`
    console.log(`the card is ${cardFinal} with a value of ${cardValue}. Your score is ${cardTotal}`)
}
function dispCard() {
    bigImg.style.backgroundImage = `url(cards/${cardFinal}.jpg)`
    bigImg.style.display = "flex"
    setTimeout(function(){bigImg.style.display = "none"}, 1500)
    cardStorage[hits - 1] = cardFinal
    console.log(`hits: ${hits}`)
    console.log(cardStorage)
    barCard = document.getElementById(`hc${hits}`)
    barCard.style.backgroundImage = `url(cards/${cardFinal}.jpg)`
    barCard.style.display = "flex"
}
function hit() {
    hits += 1
    cardPick()
    dispCard()
}