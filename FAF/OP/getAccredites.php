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

$idEvenement=$_POST["idEvent"];
$idOp=$_POST["idOP"];
/*
$idEvenement=33;
$idOp=3;*/

$sql = "SELECT nom,prenom,photo,idOp FROM ((SELECT * FROM profilagent WHERE idOp=$idOp )t1 JOIN (SELECT * FROM accrediter WHERE idEvenement=$idEvenement) t2 ON (t1.matricule=t2.mat))";

 $requete = $db->query($sql);
  $row = $requete->fetchAll();

        
        
echo json_encode($row);
  

?>