var cardTotal
var cardNum = Math.floor(Math.random() * 13) + 1
var cardSuit = Math.floor(Math.random() * 4) + 1
var cardValue
var cardSuited
var cardNumber
var cardFinal
function suitPick() {
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
    }
}
function cardPick() {
    suitPick()
    valuePick()
    cardFinal = `${cardNumber}${cardSuited}`
    console.log(`the card is ${cardFinal} with a value of ${cardValue}`)
}
cardPick()