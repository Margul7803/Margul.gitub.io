<?php 
mysql_connect("localhost","root","");
mysql_select_db("formulaire");

$a=$_POST['Num'];
$b=$_POST['Nom'];
$c=$_POST['Adresse'];
$d=$_POST['Mdp'];
$g=$_POST['Mdp2'];
$e=$_POST['Cin'];
$f=$_POST['Choix'];

if ($g == $d) {
  $req1="INSERT INTO client VALUES ('$a','$b','$c','$d','$e','$f')";
	mysql_query($req1);

	echo "<p align='center'><b><font size='7' color='#FF3399' face='Kunstler Script'> L'enregistrement a été effectué</font></b></p>";
	mysql_close();
} else {
	echo "<p align='center'><b><font size='7' color='#FF3399' face='Kunstler Script'> Différent mot de passe</font></b></p>";
}
?>