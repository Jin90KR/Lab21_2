const cardContainer = document.querySelector(".container");
const colors = ["green", "red", "blue", "red", "green", "purple", "orange", "blue", "purple", "orange", "yellow", "skyblue", "yellow", "brown", "brown", "skyblue"];
const twoCards = [];


let firstCard = "";
let waitingTime = false;

function creatCard(color) {
    const cardBox = document.createElement("div");
    cardBox.classList.add("box");
    cardBox.setAttribute("data-color", color);
    cardBox.setAttribute("picked", "false");

    cardBox.addEventListener("click", function() {
        const pickedCard = cardBox.getAttribute("picked")
        const tId = function timer() {
            firstCard.style.backgroundColor = null;
            waitingTime = false;
            firstCard = "";
        }

        if(waitingTime || pickedCard === "true" || cardBox === firstCard) {
            return;
        }

        cardBox.style.backgroundColor = color;
        
        
        if(firstCard === "") {
            firstCard = this;
            timeOut = setTimeout(tId, 2000);
            return;
        }

        clearTimeout(timeOut);
        const firstCardColor = firstCard.getAttribute("data-color");

        if (firstCardColor === color) {
            firstCard.setAttribute("picked", "true");
            cardBox.setAttribute("picked", "true");
            waitingTime = false;
            firstCard = "";

            return;
        }

        waitingTime = true;

        setTimeout(() => {
            firstCard.style.backgroundColor = null;
            cardBox.style.backgroundColor = null;

            waitingTime = false;
            firstCard = "";
        }, 2000)
        console.log(firstCard)

    })

    return cardBox;
}


for (let i = 0; i <colors.length; i++) {
    
    const color = colors[i];
    const card = creatCard(color);
    console.log(color);

    cardContainer.appendChild(card);
}