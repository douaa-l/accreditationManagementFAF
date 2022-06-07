<?php
header('Access-Control-Allow-Origin: *');
/*$serveur="localhost";
$bd="faf_accreditations";
$login="root";
$mdp="";
   
$db = new PDO("mysql:host=$serveur;dbname=$bd",$login,$mdp);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);*/

try{
        $db= new PDO('mysql:host=localhost;dbname=faf_accreditations;charset=utf8', 'root', '');

    }
    catch(Exception $e)
    {
        die ('ereeur '.$e->getMessage());
    }
     $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 $requete = $db->query('SELECT *FROM evenement');
 

 
            
            $row = $requete->fetchAll();
        
        
echo json_encode($row);
  

?>