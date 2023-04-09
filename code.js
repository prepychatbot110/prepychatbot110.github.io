function enviar(){

var usermsg = document.getElementById("msg").value;

var humchat = document.querySelector(".prepy-bodychats");
        var hummsg = document.createElement("div");
        hummsg.className = "user-chat-container";
        hummsg.innerHTML = '<div class="user-chat"><p>'+usermsg+'</p></div><img src="user.png">'
        humchat.appendChild(hummsg);
        
        document.getElementById("naesc").innerHTML = "Escribiendo..."
        
        var escribiendo = new Audio("escribiendo.mp3");
        escribiendo.loop = true;
        escribiendo.play();
        
        var bod = document.getElementById("body");
            bod.scrollTo({
                top: bod.scrollHeight,
                behavior: 'smooth'
              });

            
    const net = new brain.recurrent.LSTM();

    fetch("https://apdeprog291278.github.io/Prepy%20(123).json")
    .then((response) => response.json())
    .then((json) => {
        net.fromJSON(json);
        
        var horas = new Date().getHours().toString().padStart(2, '0')
        var minutos = new Date().getMinutes().toString().padStart(2, '0')
        var segundos = new Date().getSeconds().toString().padStart(2, '0')

        var hora = `${horas}:${minutos}:${segundos}`

        
        var usermsg = document.getElementById("msg").value;
        var min = usermsg.toLowerCase();
        var con = min.replaceAll("?", "").replaceAll(",", "").replaceAll(".", "").replaceAll("!", "").replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u");
        var preresultado = net.run(con);
        var resultado = preresultado.replaceAll('[hora]', hora).replaceAll('[urlci]', '<a href="https://prepaenlinea.sep.gob.mx/terminosycondiciones/" target="_BLANK" onclick="sound();">https://prepaenlinea.sep.gob.mx/terminosycondiciones/<a>')
        
        //responsiveVoice.speak(resultado, 'Spanish Male');

            
        
                if (resultado == ""){
                    var botchat = document.querySelector(".prepy-bodychats");
            var botmsg = document.createElement("div");
            botmsg.className = "bot-chat-container";
            botmsg.innerHTML = '<img src="error.png"><div class="bot-chat"><p>Lo siento, no entendí tu pregunta. 🤔<p></div>'
            botchat.appendChild(botmsg);
            
            escribiendo.loop = false;
            escribiendo.pause();
            escribiendo.currentTime = 0;
            
            
            var error = new Audio("error.mp3");
            error.play()
    
            document.getElementById("msg").value = "";
            
            document.getElementById("naesc").innerHTML = "Prepy"
    
                }else{
                    var botchat = document.querySelector(".prepy-bodychats");
            var botmsg = document.createElement("div");
            botmsg.className = "bot-chat-container";
            botmsg.innerHTML = '<img src="prepy.png"><div class="bot-chat"><p>'+resultado+'</p></div>'
            botchat.appendChild(botmsg);
            
            document.getElementById("naesc").innerHTML = "Prepy"
            
            escribiendo.loop = false;
            escribiendo.pause();
            escribiendo.currentTime = 0;
            
            var noti = new Audio("new.mp3");
            noti.play()
    
            document.getElementById("msg").value = "";
    
                }
            
            var bod = document.getElementById("body");
            bod.scrollTo({
                top: bod.scrollHeight,
                behavior: 'smooth'
              });
            
            
            
});
            
}
 
function sound() {
    var click = new Audio("click.mp3");
    click.play()
    
}