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


	/*$id=1;*/

 $requete = $db->query('DELETE from evenement WHERE idEvenement="'.$id.'" ');
            
        
}

?>