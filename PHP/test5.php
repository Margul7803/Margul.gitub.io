<?php 
$a=$_REQUEST['t1'];
$b=$_REQUEST['t2'];
$c=$_REQUEST['t3'];

if ($c=="+")
	$s=$a+$b;
if ($c=="/")
	$s=$a/$b;
if ($c=="%")
	$s=$a%$b;
if ($c=="-")
	$s=$a-$b;
echo "voila le resultat: ".$s."<br>";


?>
