choices = ["rock", "paper", "scissors"]



const choiceBtns = document.querySelectorAll(".choicebtn");

const Playertext = document.querySelector("#playerresult");
const ComputerText = document.querySelector("#computerresult");
const scoretext = document.querySelector("#score");


let score= 0;
let computerscore = 0;

function calculate_result(player_choice, computer_choice){

    if (computer_choice == player_choice) {
        return "Tie"
    }
    
    else if (player_choice == "rock" && computer_choice == "scissors"){  //player wins
        return ["You won rock beats scissors", "Won"]
    }

    else if (player_choice == "scissors" && computer_choice == "paper"){  //player wins
        return ["You won scissors beat paper", "Won"]
    }

    else if (player_choice == "paper" && computer_choice == "rock"){  //player wins
        return ["You won paper beats rock", "Won"]
    }

    else if (player_choice == "rock" && computer_choice == "paper"){  //player losses
        return ["You lost paper beats rock", "Lost"]
    }

    else if (player_choice == "scissors" && computer_choice == "rock"){  //player losses
        return ["You lost rock beat scissors", "Lost"]
    }

    else if (player_choice == "paper" && computer_choice == "scissors"){  //player losses
        return ["You lost scissors beat paper", "Lost"]
    }
    else{
        console.log("something_wrong")
    }
}


function GetRandomChoice (){
    var index = Math.floor(Math.random() * choices.length);
    return choices[index]
}





choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computer= GetRandomChoice();

    Playertext.textContent = `Player: ${player}`
    ComputerText.textContent = `computer: ${computer}`

    result = calculate_result(player, computer)
    if (result == "Tie"){
        scoretext.textContent = `Result: its a tie! player: ${score} computer: ${computerscore}`
    }
    else if (result[1] == "Won"){
        score = score+1;
        scoretext.textContent = `${result[0]}  SCORE: player: ${score} computer: ${computerscore}`

    }

    else if (result[1] == "Lost"){
        computerscore = computerscore+1;
        scoretext.textContent = `${result[0]}  SCORE: player: ${score} computer: ${computerscore}`
            

    }
    if (computerscore == 5 ){
        for (let i=0; i<choiceBtns.length; i++){
            choiceBtns[i].disabled = true;

        }
        scoretext.textContent = `You lost! Refresh the page to play again!`
        return
    }
    if (score == 5 ){
        for (let i=0; i<choiceBtns.length; i++){
            choiceBtns[i].disabled = true;

        }
        scoretext.textContent = `You won! Refresh the page to play again!`
        return
    }
    
    
}))

