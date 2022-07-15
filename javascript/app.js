
var messages = document.getElementById('person2')
var textbox = document.getElementById('textbox')
var button = document.getElementById('button')
var userMessage = document.getElementById('user-message')

var botter = document.getElementById('person1')

var sidebar = document.querySelector('.sidebar')

var burger = document.querySelector('.burger')

burger.addEventListener('click', () =>{

    sidebar.classList.add("sidebar-animation");

    if(sidebar.style.display == 'none'){
        sidebar.style.display = 'block'
    }else{
        sidebar.style.display = 'none'
    }

});

function sendButton(){
    createMessage()
    window.scrollTo(0, document.body.scrollHeight);

}

textbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        createMessage()
        bottomScroll()
    }
});

function bottomScroll(){
    const element = document.getElementById("messageContainer");
    element.scrollTop = element.scrollHeight;
}

function createMessage(){

    var myName = "Yuri Kun"

    checkBox()
    greetingBot()
    
    var newMessage = document.createElement('li')
    var text = document.createElement('p')
        text.innerHTML = myName + ': ' +textbox.value;
        newMessage.style.color = "black"
        newMessage.style.listStyle = "none"
        
        botter.appendChild(newMessage)
        newMessage.appendChild(text)
        textbox.value = '';
}

function createMessage(){

    var myName = "Yuri Kun"

    checkBox()
    greetingBot()
    
    var newMessage = document.createElement('li')
    var text = document.createElement('p')
        text.innerHTML = myName + ': ' +textbox.value;
    
        newMessage.classList.add('li', 'new-box');
        botter.appendChild(newMessage)
        newMessage.appendChild(text)
        textbox.value = '';
}

