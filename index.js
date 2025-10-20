let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");

let homeScore = 0;
let awayScore = 0;

function home1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function home2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function home3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function away1() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}
function away2() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}
function away3() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}