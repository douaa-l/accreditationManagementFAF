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
$matricule=$_POST["matricule"];
/*

$idEvenement=1;
$matricule=201;*/

$requete = $db->query('DELETE from demander WHERE mat="'.$matricule.'" AND idEvenement="'.$idEvenement.'" ');
 
$requete = $db->query('INSERT INTO accrediter (mat,idEvenement) VALUES ("'.$matricule.'" ,"'.$idEvenement.'" )');
        
        

  

?>