<?php
header('Access-Control-Allow-Origin: *');

try{
        $db= new PDO('mysql:host=localhost;dbname=faf_accreditations;charset=utf8', 'root', '');

    }
    catch(Exception $e)
    {
        die ('ereeur '.$e->getMessage());
    }
     $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
/*
$idEvenement=$_POST["idEvent"];
$idOp=$_POST["idOP"];

$idEvenement=32;
$idOp=3;*/


$sql = "SELECT 	* FROM  fonction";

 $requete = $db->query($sql);
  $row = $requete->fetchAll();

        
  
echo json_encode($row);
  

?>