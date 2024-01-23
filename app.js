const choices = document.querySelectorAll(".choice");
const userSCore = document.querySelector(".s-user");
const compScore = document.querySelector(".s-comp");
const msg = document.querySelector(".msg");
const newbtn = document.querySelector(".newbtn");
// const strbtn = document.querySelector(".strbtn")


let userChoice;
let compChoice;
let userCount = 0; 
let compCount = 0

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        // console.log("hi");
        userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
        
    })
});

const genComputerchoice = () => {
    const pattern = ['rock', 'scissor', 'paper'];
    let randomIdx = Math.floor(Math.random()*3);
    console.log("hi",pattern[randomIdx], randomIdx);
    return pattern[randomIdx]; 
}


let userWin;
const playGame = (userChoice) => {

    compChoice = genComputerchoice();
    if(userChoice === compChoice){
       console.log('game was draw');
    gameDraw();
    }
    else{
        userWin = true;
        if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
            // console.log( userWin);
        }
    
        else if(userChoice === "scissor"){
            userWin = compChoice === "paper" ? true : false ;
            // console.log( userWin);
        }
        else if(userChoice === "rock"){
            userWin = compChoice === "scissor" ? true : false;
            // console.log(userWin);
        }
        showWinner(userWin);
    }
    
}

const showWinner = (userWin) =>{
    if(userWin){
        userCount++;
        // msg.innerText = `Your choice is ${userChoice} and Your score is ${userCount}`;
        msg.innerText = `Your choice is ${userChoice} and Computer choice is ${compChoice}`;
        userSCore.innerText = userCount;
        compScore.innerText = compCount;
        msg.style.color = "red";
        
    }
    else{
        compCount++;
        // msg.innerText = `Computer choice is ${compChoice} and com score is ${compCount}`;
        msg.innerText = `Computer choice is ${compChoice} and our choice is ${userChoice} `;
        compScore.innerText = compCount;
        userSCore.innerText = userCount;
        msg.style.color = "yellow";
    }
    // if(userChoice === compChoice ){
    //     console.log("gaem was draw");
    // }
    // else if(userWin == true){
    //     console.log("user won");
    // }
    // else {
    //     console.log("comp won");
    // }

}

const gameDraw  = () => {
    msg.innerText = "Game Was Draw. Play again";
    msg.style.color = "#FFA252";
}

newbtn.addEventListener('click', ()=> {
    msg.innerText = "";
    userCount = 0;
    compCount = 0;
    compScore.innerText = "";
     userSCore.innerText = "";
});

// strbtn.addEventListener('click', () => {
//     document.body.style.display = "none";
// })

