<?php 
$a=$_REQUEST['t1'];
$b=$_REQUEST['t2'];

$s=(min($b,$a));
$d=(max($b,$a));


print 'le plus petit est: ' . $s.'<br>';
print 'le plus grand est: ' . $d.'<br>';


?>