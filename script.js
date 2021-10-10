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