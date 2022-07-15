function botMessage(botReply){  

    setTimeout(function(){

        var botN = "Kurumeow (bot)"

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

function botGif(botGif){  

    setTimeout(function(){

        var botN = "Kurumeow (bot): "

        var newMessage = document.createElement('li')
       
        var botName = document.createElement('p')
        var text = document.createElement('p')

        var DOM_img = document.createElement("img");
        DOM_img.src = botGif

        text.textContent = botN
        newMessage.appendChild(text)

        newMessage.appendChild(DOM_img);

        //botName.textContent = botN
    
        newMessage.classList.add('li', 'new-box');

        DOM_img.id = 'myImg'; 
        
        botter.appendChild(newMessage)
        newMessage.appendChild(botName)

        bottomScroll()

    },2000);

    

}


function checkBox(){

    complementBot()

    if(textbox.value.trim() == ""){
        textbox.innerText =(field.value === "") ? "Field is empty." : "Field is filled.";
    
    }
}

function greetingBot(){
    if(textbox.value.trim() == "The weather's so nice today!"){

        botMessage('Zaphkiel')

    }else if(textbox.value.trim() == "The weather's so nice today!"){

        botMessage('Yes, it is nice weather today')

    }
}

function complementBot(){

    if(textbox.value.trim() == "Hello"){

        botMessage("I'm your Japanese Bot " + 'Harumin')

        setTimeout(function(){
            botMessage("I will translate your words to japanese")
        },2000);

    }

    else if(textbox.value.trim() == "Hello"){

        botMessage('Konnichiwa ' + 'こんにちは')

    } else if(textbox.value.trim() == "I love you"){

        botMessage('I hate you')
    }else if(textbox.value.trim() == "I hate you"){

        botMessage('Zaphkiel')

    } else if(textbox.value.trim() == "Send pic"){

        botGif("https://c.tenor.com/o_2VGtQWIo8AAAAC/kurumi-love.gif")

    } 
}

