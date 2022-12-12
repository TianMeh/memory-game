document.addEventListener('DOMContentLoaded', function() {
    const imgArray = [
        {
            name: 'bird',
            img: 'imgs/bird.jpg'
        },
        {
            name: 'bird',
            img: 'imgs/bird.jpg'
        },
        {
            name: 'elephant',
            img: 'imgs/elephant.jpg'
        },
        {
            name: 'elephant',
            img: 'imgs/elephant.jpg'
        },
        {
            name: 'frog',
            img: 'imgs/frog.jpg'
        },
        {
            name: 'frog',
            img: 'imgs/frog.jpg'
        },
    ]


    imgArray.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid');
    const result = document.querySelector('#score')
    let cardChosen = []
    let cardChosenId = []
    let cardsWon = []


    //push cards into grid
    function pushCards() {
        for(i = 0; i < imgArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('data-id', i);
            card.setAttribute('src', 'imgs/green.jpg')
            card.addEventListener('click', turnCard)
            grid.appendChild(card)
        }
    }



    // check for match
    function checkMatch() {
        let cards = document.querySelectorAll('img')
        const optionOne = cardChosenId[0]
        const optionTwo = cardChosenId[1]
        if (cardChosen[0] === cardChosen[1]) {
            alert('Bravo, našli ste karti! :)')
            cards[optionOne].setAttribute('src', 'imgs/white.png')
            cards[optionTwo].setAttribute('src', 'imgs/white.png')
            cardsWon.push(cardChosen)
        } else {
            alert('Žal karti nista enaki. :(')
            cards[optionOne].setAttribute('src', 'imgs/green.jpg')
            cards[optionTwo].setAttribute('src', 'imgs/green.jpg')
        }
        cardChosen = []
        cardChosenId = []
        result.textContent = 'Rezultat: ' + cardsWon.length
        if (cardsWon.length === imgArray.length/2) {
            result.textContent = 'Zmagali ste!'
        }
    }





    // turn card
    function turnCard() {
        let cardId = this.getAttribute('data-id');
        cardChosen.push(imgArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', imgArray[cardId].img)
        if (cardChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }




    pushCards()








})