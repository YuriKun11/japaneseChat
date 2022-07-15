function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "Goodbye") {
        return "Talk to you later!";
        
    } else if(input == "Who's your master?")
        return "You"
    else {
        return "Try asking something else!";
    } 





}