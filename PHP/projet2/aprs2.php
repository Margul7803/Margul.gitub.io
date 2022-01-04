<?php 
mysql_connect("localhost","root","");
mysql_select_db("scolarite2");

$a=$_POST['Num'];
$b=$_POST['Nom'];
$c=$_POST['Adresse'];
$d=$_POST['Tel'];
$e=$_POST['Choix'];


$req1="INSERT INTO eleve VALUES ('$a','$b','$c','$d','$e')";
mysql_query($req1);

echo "<p align='center'><b><font size='7' color='#FF3399' face='Kunstler Script'> L'enregistrement a été effectué</font></b></p>";
mysql_close() 
?>