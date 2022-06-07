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
$matricule=202;*/

$requete = $db->query('UPDATE demander SET etatRefus=1 WHERE mat="'.$matricule.'" AND idEvenement="'.$idEvenement.'" ');
 

        
        

  

?>