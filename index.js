let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = {
    name: "Per",
    chips: 145
}

let PlayerEl = document.getElementById("player-el")
PlayerEl.textContent = player.name + "$" + player.chips

function getRandomCard()
{
    let randomnumber = Math.floor (Math.random() * 13) + 1
    if (randomnumber === 1)
    {
        return 11
    }else if (randomnumber > 10)
    {
        return 10
    }else
    {
        return randomnumber
    }
    
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame()
{
    sumEl.textContent = "Sum : " + sum
    cardEl.textContent = "Cards : " + cards
    if (sum <= 20)
    {
        message = "Do you want to draw a new card?"
        hasBlackJack = true
    }else if (sum === 21)
    {
        message = "Wohoo! you have got blackJack"
        isAlive = false
    }else
    {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard()
{
    if (hasBlackJack === true && isAlive === true)
    {
        let card = getRandomCard()

        sum += card

        cards.push(card)

        renderGame()
    }
    
}
