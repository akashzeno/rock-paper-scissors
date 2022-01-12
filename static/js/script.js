function computerChoice() {
    let computer = Math.floor(Math.random() * 3);
    return computerChoiceList[computer];
}

function checkWin(user, computer) {
    if (user === computer) {
        deleteExtraImg(user, computer);
        return "Draw!";
    }
    else if (user == rock && computer == paper || user == paper && computer == scissors || user == scissors && computer == rock) {
        deleteExtraImg(user, computer);
        return "Computer Wins!";
    }
    else {
        deleteExtraImg(user, computer);
        return "You Win!";
    }

}

function gameStart(userChoice) {
    let result = checkWin(userChoice, computerChoice());
    document.querySelector(".mainContainer__result").innerHTML = `<button class="btnReplay">Replay</button><h1 class="result">${result}</h1>`;
    document.querySelectorAll(".rps").forEach((img) => {img.style.transform = "rotate(-90deg)";
img.style.pointerEvents = "none";});
document.querySelector(".btnReplay").addEventListener("click",location.reload.bind(window.location));

}

function deleteExtraImg(user, computer) {
    for(let item of computerChoiceList){
        if(item != user && item != computer){
            document.querySelector(`.${item}`).style.display = "none";
        }

}
}
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let computerChoiceList = [rock, paper, scissors];

document.querySelector(".mainContainer__rockImg").addEventListener("click",()=>{
    gameStart(rock);
});
document.querySelector(".mainContainer__paperImg").addEventListener("click",()=>{
    gameStart(paper);
});
document.querySelector(".mainContainer__scissorsImg").addEventListener("click",()=>{
    gameStart(scissors);
});
