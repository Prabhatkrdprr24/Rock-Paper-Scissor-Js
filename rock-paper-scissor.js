let score = {
    computerWon: 0,
    userWon: 0,
    tie: 0,
}

function computerChoice(){
    let ranomChoice = Math.floor(Math.random() * 3 + 1);
    let computerChoiceText = "";
    if(ranomChoice == 1){
        computerChoiceText = "rock";
    }
    else if(ranomChoice == 2){
        computerChoiceText = "paper";
    }
    else{
        computerChoiceText = "scissor";
    }

    return computerChoiceText;
}

function updateResult(userChoice, computerChoiceText, res){

    if(res == "Computer Wins"){
        score.computerWon++;
    }
    else if(res == "You Win"){
        score.userWon++;
    }
    else{
        score.tie++;
    }

    document.getElementById('score').innerHTML = `Computer Won: ${score.computerWon} times <br> User Won: ${score.userWon} times <br> No of match Tie: ${score.tie}`;

    document.getElementById('result').innerHTML = `You Choose ${userChoice}.<br></nr> Computer Choose ${computerChoiceText} <br> And the result is ${res}`;

}

function handleRockClick(){

    let computerChoiceText = computerChoice();

    let res;
    if(computerChoiceText == "rock"){
        res = "Draw";
    }
    else if(computerChoiceText == "paper"){
        res = "Computer Wins";
    }
    else{
        res = "You Win";
    }

    updateResult("Rock", computerChoiceText, res);    
}

function handlePaperClick(){

    let computerChoiceText = computerChoice();

    let res;
    if(computerChoiceText == "rock"){
        res = "You Win";
    }
    else if(computerChoiceText == "Paper"){
        res = "Draw";
    }
    else{
        res = "Computer Wins";
    }


    updateResult("Paper", computerChoiceText, res);
}

function handleScissorClick(){
    
    let computerChoiceText = computerChoice();

    let res;
    if(computerChoiceText == "rock"){
        res = "Computer Wins";
    }
    else if(computerChoiceText == "Paper"){
        res = "You Win";
    }
    else{
        res = "Draw";
    }


    updateResult("Scissor", computerChoiceText, res);

}