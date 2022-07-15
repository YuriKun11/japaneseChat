function firstJapaneseBotMessage() {
    let firstMessage = "Date a live"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

function secondJapaneseBotMessage() {
    let secondMessage = "Kurumi (bot)"
    document.getElementById("botStarterMessage1").innerHTML = '<p class="botSecondText"><span>' + secondMessage + '</span></p>';

    document.getElementById("userInput").scrollIntoView(false);
}

function getBotResponse(input) {

    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    } 

    // Greeting responses
    if (input == "Hello") {
        return '';
    } else if (input == "Goodbye") {
        return "Talk to you later!";
        
    } else if(input == "Send gif"){
       
        let botHtml = '<img src="https://c.tenor.com/o_2VGtQWIo8AAAAC/kurumi-love.gif" id="myImg">';
    
        return botHtml
    }else if(input == "Send pic"){
       
        let botHtml = '<img src="https://animecorner.me/wp-content/uploads/2022/06/date-a-live-kurumi-trailer.png" id="myImg">';
    
        return botHtml
    }

    else {
        return "Try asking something else!";
    } 
    


}
