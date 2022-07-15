function firstJapaneseBotMessage() {
    let firstMessage = "I'm your Japanese Bot"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

function secondJapaneseBotMessage() {
    let secondMessage = "I will translate what you say into Japanese"
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
        return 'Konnichiwa ' + 'こんにちは';
    } else if (input == "Goodbye") {
        return "Talk to you later!";
        
    } else if(input == "Good morning")
        return "Ohayo gozaimasu おはようございます"

    else if(input == "Good afternoon"){
        return "Konnichiwa こんにちは"
    }
    else if(input == "Good evening"){
        return "Konbanwa こんばんは"
    }
    else if(input == "Goodnight"){
        return "Oyasumi nasai おやすみなさい"
    }
    else if(input == "How are you?"){
        return "Genki desu ka? 元気ですか"
        
    } else if(input == "I'm fine, thanks"){
        return "Genki desu 元気 です"
        
    }else if (input == "I'm not well, thanks"){
        return "Genkidewa arimasen 元気ではありません"
    }
    else if(input =="What's your name?"){
        return "Anatano namae wa nandesuka? あなたの 名前 和 なんですか"
    }
    else if(input =="My name is"){
        return "Watashino namae wa ... desu  私の名前は 。。。です"
    }else if(input =="See you later"){
        return "Mata aimasyou  また会いましょう "

    }else if(input == "Goodbye"){
       return "Sayonara さようなら"

    }else if(input =="Nice to meet you"){
        return "Hajimemashite はじめまして"
        
    }else if(input == "What about you?"){
        return "Anata wa dou desuka あなたはどうですか"

    }else if(input == "Good luck"){
        return "Kooun wo inorimasu 幸運を祈ります"

    }else if(input == "Take care"){
        return "Ki wo tsukete 気をつけて"

    }else if(input =="It's been a while"){
        return "Shibaraku desu しばらくです"

    }else if(input == "Can you speak English?"){
        return "Eigo ga hanasemasuka? 英語が話せますか" 

    }else if(input =="I can speak a little Japanese"){
        return "Watashi wa sukoshi nihonggo ga hanasemasu 私は少し日本語が話せます"

    }else if(input =="I can't speak Japanese"){
        return "Watashi wa nihonggo ga hanasemasen 私は日本語が話せません"

    //Babalikan ko to
    }else if(input =="I'm from (country)..."){
        return "Watashi wa (country) no syusshindesu 私は（国）の出身です"
        
    }else if(input =="How old are you?"){
        return "Nansai desuka? 何歳ですか"

    //Babalikan ko rin to
    }else if(input == "I'm (30) years old"){
        return "Watashi wa 30 sai desu  私は（30）才（歳）です"

    }else if(input == "Special occasions"){
        return "Tokubetsu na kikai 特別な機会"

    }else if(input =="Merry Christmas"){
        return "Merii Kurismasu メリークリスマス"

    }else if(input =="Happy New Year"){
        return "Akemashite omedetou gozaimasu あけましておめでとうございます"

    }else if(input=="Happy Anniversary"){
        return "Kinenbi omedetou 記念日おめでとう"

    }else if(input =="Happy Valentines"){
        return "Suteki na barentain o! すてきなバレンタインを！"

    }else if(input =="Happy Easter"){
        return "Suteki na iisutaa o! すてきなイースターを！"

    }else if(input =="Happy Mother's day"){
        return "Haha no hi omedetou 母の日おめでとう"

    }else if(input =="Happy Father's day"){
        return "Chichi no hi omedetou 父の日おめでとう"

    }else if(input == "Happy Birthday"){
        return "Otanjoubi omedetou おたんじょう日おめでとう"

    }else if(input =="Happy belated Birthday"){
        return "Okurebasenagara otanjoubi omedetou 遅ればせながらおたんじょう日おめでとう"

    }else if(input == "When is your anniversary?"){
        return "Kinenbi wa itsu desu ka? 記念日はいつですか？"
    }




    else {
        return "Try asking something else!";
    } 
    


}
