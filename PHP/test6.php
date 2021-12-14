<?php 
$a=$_REQUEST['t1'];
$b=$_REQUEST['t2'];
$c=$_REQUEST['t3'];
$d=$_REQUEST['t4'];
$e=$_REQUEST['t5'];

$r=($a*2+$b*2+$c*2+$d*3+$e*3)/12;

if ($r<10)
	$p="Refuse";
if ($r>=10)
	$p="Admis";
if ($r>=15)
	$p="Admis avec mention";

echo "Vous etes ".$p."<br>";
?>