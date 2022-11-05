choices = ["rock", "paper", "scissors"]


function calculate_result(player_choice, computer_choice){

    if (computer_choice == player_choice) {
        return "Tie"
    }
    
    else if (player_choice == "rock" && computer_choice == "scissors"){  //player wins
        return "Won"
    }

    else if (player_choice == "scissors" && computer_choice == "paper"){  //player wins
        return "Won"
    }

    else if (player_choice == "paper" && computer_choice == "rock"){  //player wins
        return "Won"
    }

    else if (player_choice == "rock" && computer_choice == "paper"){  //player losses
        return "lost"
    }

    else if (player_choice == "scissors" && computer_choice == "rock"){  //player losses
        return "lost"
    }

    else if (player_choice == "paper" && computer_choice == "scissors"){  //player losses
        return "lost"
    }
}


function GetRandomChoice (){
    var index = Math.floor(Math.random() * choices.length);
    return choices[index]
}




const btn=document.getElementById("rock");

btn.addEventListener("click", function(){
    alert("You clicked me");
 })