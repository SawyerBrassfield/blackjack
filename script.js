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
var comCardTotal = 0
var comAceAmount = 0
var comHits = 0
var comCardStorage = []
var comBarCard
var hitter = document.getElementById("hit")
var stander = document.getElementById("stand")
var comStanded = false
var a
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
    setTimeout(function(){barCard.style.display = "flex"}, 1500)
}
function comValuePick() {
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
        comAceAmount += 1
    }
}
function comCardPick() {
    suitPick()
    comValuePick()
    comCardTotal += cardValue
    cardFinal = `${cardNumber}${cardSuited}`
}
function comDispCard() {
    bigImg.style.backgroundImage = "url(cards/back.jpg)"
    bigImg.style.display = "flex"
    setTimeout(function(){bigImg.style.display = "none"}, 1500)
    comCardStorage[comHits - 1] = cardFinal
    console.log(comCardStorage)
    comBarCard = document.getElementById(`cc${comHits}`)
    comBarCard.style.backgroundImage = "url(cards/back.jpg)"
    setTimeout(function(){comBarCard.style.display = "flex"}, 1500)
}
function comHit() {
    comHits += 1
    comCardPick()
    comDispCard()
}
function stand() {
    hitter.style.display = "none"
    stander.style.display = "none"
    do {
        if(comCardTotal < 17) {
            setTimeout(function(){comHit()}, 2000)
        }
        else if(comCardTotal >= 17) {
            comStand()
        }
    }
    while(comStanded == false);
}
function comReveal() {
    for(a = 0; a < comHits; a++) {
        comBarCard = document.getElementById(`cc${a + 1}`)
        comBarCard.style.backgroundImage = `url(cards/${comCardStorage[a]}.jpg)`
    }
}
function comStand() {
    comReveal()
}
function hit() {
    hits += 1
    cardPick()
    dispCard()
    if(comStanded == false) {
        if(comCardTotal < 17) {
            setTimeout(function(){comHit()}, 2000)
        }
        else if(comCardTotal >= 17) {
            comStand()
        }
    }
}