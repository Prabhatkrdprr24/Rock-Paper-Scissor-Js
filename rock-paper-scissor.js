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

    document.getElementById('result').innerHTML = `You Choose Rock.<br></nr> Computer Choose ${computerChoiceText}`;
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

    document.getElementById('result').innerHTML = `You Choose Paper. <br>Computer Choose ${computerChoiceText}`;
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

    document.getElementById('result').innerHTML = `You Choose Scissor.<br> Computer Choose ${computerChoiceText}`;

}