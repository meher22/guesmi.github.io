$(document).ready(function(){
    if(typeof(sessionStorage) !=="undefined") {
        if('counter' in sessionStorage){
            var x = sessionStorage.getItem('counter');
            x++;
            sessionStorage.setItem('counter',x);
            document.getElementById('Counter').innerHTML="Nombre de visite:  " + x;
        }
        else{
            sessionStorage.setItem('counter',1);
        }
        } 
    else {
        alert("Désolé,maisleWebStoragen'estpassuppoté");
        }
})