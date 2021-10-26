function calculate() 
{
var x=Number(document.getElementById("prix1").value);
var y=Number(document.getElementById("quantité1").value);
var e=Number(document.getElementById("prix2").value);
var r=Number(document.getElementById("quantité2").value);
var i=Number(document.getElementById("prix3").value);
var o=Number(document.getElementById("quantité3").value);
var p1=Number(document.getElementById("prix4").value);
var q1=Number(document.getElementById("quantité4").value);
var p2=Number(document.getElementById("prix5").value);
var q2=Number(document.getElementById("quantité5").value);
var p3=Number(document.getElementById("prix6").value);
var q3=Number(document.getElementById("quantité6").value);
var p4=Number(document.getElementById("prix7").value);
var q4=Number(document.getElementById("quantité7").value);
var p5=Number(document.getElementById("prix8").value);
var q5=Number(document.getElementById("quantité8").value);
var p6=Number(document.getElementById("prix9").value);
var q6=Number(document.getElementById("quantité9").value);
var p7=Number(document.getElementById("prix10").value);
var q7=Number(document.getElementById("quantité10").value);
var p8=Number(document.getElementById("prix11").value);
var q8=Number(document.getElementById("quantité11").value);

var remise=Number(document.getElementById("remise").value);
var taux=parseInt(document.getElementById("taux").value+"%");
var expedition=Number(document.getElementById("manutention").value);

var resultat1=Number(document.getElementById("résultat1").value);
document.getElementById("résultat1").value=(x*y);
var resultat1=Number(document.getElementById("résultat1").value);
document.getElementById("résultat2").value=(e*r);
var resultat2=Number(document.getElementById("résultat2").value);
document.getElementById("résultat3").value=(i*o);
var resultat3=Number(document.getElementById("résultat3").value);
document.getElementById("résultat4").value=(p1*q1);
var resultat4=Number(document.getElementById("résultat4").value);
document.getElementById("résultat5").value=(p2*q2);
var resultat5=Number(document.getElementById("résultat5").value);
document.getElementById("résultat6").value=(p3*q3);
var resultat6=Number(document.getElementById("résultat6").value);
document.getElementById("résultat7").value=(p4*q4);
var resultat7=Number(document.getElementById("résultat7").value);
document.getElementById("résultat8").value=(p5*q5);
var resultat8=Number(document.getElementById("résultat8").value);
document.getElementById("résultat9").value=(p6*q6);
var resultat9=Number(document.getElementById("résultat9").value);
document.getElementById("résultat10").value=(p7*q7);
var resultat10=Number(document.getElementById("résultat10").value);
document.getElementById("résultat11").value=(p8*q8);
var resultat11=Number(document.getElementById("résultat11").value);

document.getElementById("sous-total").value=(resultat1+resultat2+resultat3+resultat4+resultat5+resultat6+resultat7+resultat8+resultat9+resultat10+resultat11);
var sous_total=Number(document.getElementById("sous-total").value);
document.getElementById("sous-total remise").value=(sous_total-remise);
var sous_total_remise=Number(document.getElementById("sous-total remise").value);
document.getElementById("taxer").value=((taux/100)*sous_total_remise);
var taxer=parseInt(document.getElementById("taxer").value);
document.getElementById("solde").value=(sous_total_remise+taxer+expedition)+"€";
}

function acces()
{
var username=prompt("Identifiant :");
var password=prompt("Mot de passe :");

if (username==="Admin_GSB" && password==="admin")
{
window.open("menu_pdf.html", '_blank');
}
else
{ 
alert("Identifiant ou mot de passe incorrects")
}

}