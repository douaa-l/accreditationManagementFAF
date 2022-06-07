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
$idEvenement=1;
$idOp=2;*/


$sql = "SELECT nom,prenom,matricule,idOp FROM ((SELECT * FROM profilagent WHERE idOp=$idOp )t1 JOIN (SELECT * FROM demander WHERE idEvenement=$idEvenement AND etatRefus=1) t2 ON (t1.matricule=t2.mat))";

 $requete = $db->query($sql);
  $row = $requete->fetchAll();

        
  
echo json_encode($row);
  

?>