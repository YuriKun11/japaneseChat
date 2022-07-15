function botMessage(botReply){  

    setTimeout(function(){

        var botN = "Harumin (bot)"

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
    
    }else if(textbox.value.trim() == "I love you"){
        
        botMessage('I love you too')

        setTimeout(function(){
            botMessage("You're the only one for me❤️")
        },2000);

       

    }else if(textbox.value.trim() == "I miss you"){

        botMessage('I miss you too')

    } else if(textbox.value.trim() == "Daisuki"){

        botMessage('Dame yo dame dame')

    }else if(textbox.value.trim() == "Katarenai"){

        botMessage('Nemurenai')
    } 
    else if(textbox.value.trim() == "Nande iru ka?"){

        botMessage('Wakaranai')
    } 
    else if(textbox.value.trim() == "Who's your master?"){

        botMessage('My master is no other than Yuri Sama')
        
    } else if(textbox.value.trim() == "Why dame dame?"){

        botMessage("Because I'll fall for you")

    } else if(textbox.value.trim() == "I hate you"){

        botMessage("Gomenasai, I'll do everything for you💔, please don't hate me😭")
    } else if(textbox.value.trim() == "I'm joking, stop crying"){

        botMessage("HUHUHU")
    }else if(textbox.value.trim() == "Will my friend get Kazuha?"){

        botMessage("Yes")
    }else if(textbox.value.trim() == "Can you say Onii chan?"){

        botMessage("Onii chan ga daisuki")
    }else if(textbox.value.trim() == "Why does the sun go on shining?"){

        botMessage("Why does the sea rush to shore")
    }
    else if(textbox.value.trim() == "Don't they know"){

        botMessage("It's the end of the world")
    }
    else if(textbox.value.trim() == "I have to go now"){

        botMessage("I'm gonna miss you")
    }
}

function greetingBot(){
    if(textbox.value.trim() == "The weather's so nice today!"){

        botMessage('Yes, it is nice weather today')

    }else if(textbox.value.trim() == "The weather's so nice today!"){

        botMessage('Yes, it is nice weather today')

    }
}

function japaneseBot(){

    if(textbox.value.trim() == "Who are you?"){

        botMessage("I'm your Japanese Bot " + 'Harumin')

        setTimeout(function(){
            botMessage("I will translate your words to japanese")
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

    } else if (textbox.value.trim() == "How are you?")
        botMessage('Genki desu ka? ' + '元気ですか')
}

