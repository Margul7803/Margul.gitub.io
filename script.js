function initElement()
{
    var bouinn = document.getElementById("bouin");
    var se = new Audio('boin.mp3');                                                                     

    boinn.onclick = playSound;

    function playSound()
    {
        se.play();
    }
}

var button = document.getElementsByTagName('button')[0];
var image = document.getElementsByTagName('dancin')[0];

window.afficher = function(){
image.style.display = (image.style.display == "block") ? "none" : "block";
}



button.onclick = afficher;