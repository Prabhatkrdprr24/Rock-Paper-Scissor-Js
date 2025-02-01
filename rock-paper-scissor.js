function handleRockClick(){
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let computerChoiceText = "";
    if(computerChoice == 1){
        computerChoiceText = "rock";
    }
    else if(computerChoice == 2){
        computerChoiceText = "Paper";
    }
    else{
        computerChoiceText = "Scissor";
    }

    let res;
    if(computerChoice == "rock"){
        res = "Draw";
    }
    else if(computerChoice == "Paper"){
        res = "Computer Wins";
    }
    else{
        res = "You Win";
    }

    document.getElementById('result').innerHTML = `You Choose Rock.<br></nr> Computer Choose ${computerChoiceText} <br> And the result is ${res}`;
}

function handlePaperClick(){
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let computerChoiceText = "";
    if(computerChoice == 1){
        computerChoiceText = "rock";
    }
    else if(computerChoice == 2){
        computerChoiceText = "Paper";
    }
    else{
        computerChoiceText = "Scissor";
    }

    let res;
    if(computerChoice == "rock"){
        res = "You Win";
    }
    else if(computerChoice == "Paper"){
        res = "Draw";
    }
    else{
        res = "I win";
    }


    document.getElementById('result').innerHTML = `You Choose Paper. <br>Computer Choose ${computerChoiceText} <br> And the result is ${res}`;
}

function handleScissorClick(){
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let computerChoiceText = "";
    if(computerChoice == 1){
        computerChoiceText = "rock";
    }
    else if(computerChoice == 2){
        computerChoiceText = "Paper";
    }
    else{
        computerChoiceText = "Scissor";
    }

    let res;
    if(computerChoice == "rock"){
        res = "I win";
    }
    else if(computerChoice == "Paper"){
        res = "You Win";
    }
    else{
        res = "Draw";
    }


    document.getElementById('result').innerHTML = `You Choose Scissor.<br> Computer Choose ${computerChoiceText} <br> And the result is ${res}`;

}