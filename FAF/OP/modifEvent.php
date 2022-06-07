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

 if (isset($_POST)){
$id=$_POST["id"];
$nom=$_POST["nom"];
$lieu=$_POST["lieu"];
$type=$_POST["type"];
$equipeA=$_POST["equipeA"];
$equipeB=$_POST["equipeB"];
$date=date('Y-m-d h:i',(strtotime($_POST["date"]."".$_POST["time"])));
$dateLimite=date('Y-m-d h:i',(strtotime($_POST["dateLimite"]."".$_POST["timeLimite"])));
$logoA=$_POST["logoA"];
$logoB=$_POST["logoB"];
 /* 
$id=16;
$nom="elbiladTV";
$email="elbiladTV@gmail.com";
$statut="entreprise privée";
$siege="said hamdine alger";
$categ="TV";
$date="2012-03-01";

$id=28;
$nom="event";
$lieu="plassa";
$type="Match";
$equipeA="USMA";
$equipeB="MCA";
$date=date('Y-m-d h:i:s',(strtotime("18-03-2021".""."12:07:00")));
$dateLimite=date('Y-m-d h:i:s',(strtotime("19-03-2021".""."12:05:00")));
$logoA="";
$logoB="";*/

 $requete = $db->query('UPDATE evenement SET nomEvent="'.$nom.'",lieuEvent="'.$lieu.'", dateEvent="'.$date.'" ,dateLimiteDemande="'.$dateLimite.'" ,typeEvent="'.$type.'", equipeA="'.$equipeA.'", equipeB="'.$equipeB.'" , logoA="'.$logoA.'", logoB="'.$logoB.'" WHERE  idEvenement="'.$id.'"');
            
        
        
 echo json_encode($id)   ;   
  
}

?>