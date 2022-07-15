function botMessage(botReply){  

    setTimeout(function(){

        var botN = "Japanese (bot)"

        var newMessage = document.createElement('li')
        var text = document.createElement('p')
        var botName = document.createElement('p')
       
        //botName.textContent = botN
          
        text.textContent = botN+ ': ' + botReply

        newMessage.classList.add('li', 'new-box');
        botter.appendChild(newMessage)
        newMessage.appendChild(botName)
        newMessage.appendChild(text)

        bottomScroll()

    },2000);
      
}


function checkBox(){

    japaneseBot()

    if(textbox.value.trim() == ""){
        textbox.innerText =(field.value === "") ? "Field is empty." : "Field is filled.";

    }
}

function greetingBot(){
    if(textbox.value.trim() == "Who are you?"){

        botMessage("I'm your Japanese Bot ")

        setTimeout(function(){
            botMessage("I will translate what you say into Japanese")
        },2000);

    }

    else if(textbox.value.trim() == "Hello"){

        botMessage('Konnichiwa ' + 'こんにちは')
  

    }else if(textbox.value.trim() == "Good morning"){

        botMessage('Ohayo gozaimasu '+ 'おはようございます')

    }
    else if(textbox.value.trim() == "Good afternoon"){

        botMessage('Konnichiwa ' + 'こんにちは')

    }
    else if(textbox.value.trim() == "Good afternoon"){

        botMessage('Konnichiwa ' + 'こんにちは')

    }else if (textbox.value.trim() == "Good evening"){

        botMessage('Konbanwa ' + 'こんばんは')
    }
    else if (textbox.value.trim() == "Goodnight"){

        botMessage('Oyasumi nasai ' + 'おやすみなさい')

    } else if (textbox.value.trim() == "How are you?"){

        botMessage('Genki desu ka? ' + '元気ですか')
    }
        
}

function japaneseBot(){

   
}

