let document = window.document
let homeTotalScore = document.querySelector("#home > .total-score")
let guestTotalScore = document.querySelector("#guest > .total-score")
let counterHome = 0
let counterGuest = 0

function clearHome() {
    console.log("Clear Home Score")
    result = counterHome = 0
    homeTotalScore.innerText = result
    console.log(result)  
}
function clearGuest() {
    console.log("Clear Guest Score")
    result = counterGuest = 0
    guestTotalScore.innerText = result
    console.log(result)  
}

function homePlusOne() {
    console.log("Home Plus 1")
    result = counterHome += 1
    homeTotalScore.innerText = result
    console.log(result)
}


function homePlusTwo() {
    console.log("Home Plus 2")
    result = counterHome += 2
    homeTotalScore.innerText = result
    console.log(result)
}


function homePlusThree() {
    console.log("Home Plus 3")
    result = counterHome += 3
    homeTotalScore.innerText = result
    console.log(result)
}


function guestPlusOne() {
    console.log("Guest Plus 1")
    result = counterGuest += 1
    guestTotalScore.innerText = result
    console.log(result)
}

function guestPlusTwo() {
    console.log("Guest Plus 2")
    result = counterGuest += 2
    guestTotalScore.innerText = result
    console.log(result)
}

function guestPlusThree() {
    console.log("Guest Plus 3")
    result = counterGuest += 3
    guestTotalScore.innerText = result
    console.log(result)
}

clearHome()
