// Initialize globals
let cpuChoice;
let userChoice;

playGame();

// Generate CPU choice based upon a random number
function getCpuChoice(){
    randomNum = Math.random();
    // console.log(randomNum);
    if(randomNum <0.33){
        return ("rock");
    }
    else if(randomNum >= 0.33 && randomNum <= 0.66){
        return("paper");
    }
    else{
        return("scissors");
    }
}

//Capture user choice input
function getUserChoice(){
    let input = prompt("Make your choice: rock, paper, or scissors?");
    return input.toLowerCase();
}

// Play 5 rounds of rock, paper, scissors
function playGame(){
    // Initialize player scores
    let cpuScore = 0;
    let userScore = 0;

    // Iterate through 5 rounds
    for(let i = 0; i < 5;i++){
        cpuChoice = getCpuChoice();
        userChoice = getUserChoice();

        playRound(cpuChoice, userChoice);
        console.log(`- Current score - \n You: ${userScore} | CPU: ${cpuScore}`);
    }

    showEndResults();

    // Display final scores after 5 rounds and check whether the user would like to play again.
    function showEndResults(){
        const endResult = `\n- Final score - \n You: ${userScore} | CPU: ${cpuScore}`;

        if(userScore > cpuScore){
            console.log(` *** You win! *** ` + endResult);
        }
        else if(cpuScore> userScore){
            console.log(` You lose. ` + endResult);
        }
        else{
            console.log(` You tied! ` + endResult);
        }

        let nextPlay =  prompt("Would you like to play again (Y/N)?").toUpperCase();

        if(nextPlay === 'Y'){
            userScore = 0;
            cpuScore = 0;
            playGame();
        }
        else{
            console.log("Thanks for playing!");
        }
    }
    
    // Evaluate player choices and update their scores as appropriate
    function playRound(cpuChoice, userChoice){

        if(userChoice === cpuChoice){
            console.log(`It's a tie, you both chose ${userChoice}.`);
        }
        else if(userChoice === 'rock' && cpuChoice === 'scissors' 
                || userChoice === 'paper' && cpuChoice === 'rock'
                || userChoice === 'scissors' && cpuChoice === 'paper'){
            ++userScore;
            console.log(`You win, ${userChoice} beats ${cpuChoice}.`);
        }
        else{
            ++cpuScore;
            console.log(`You lose, ${cpuChoice} beats ${userChoice}.`);
        }
    }
}
