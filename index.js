let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function home1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function home2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function home3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function guest1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function guest2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function guest3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}