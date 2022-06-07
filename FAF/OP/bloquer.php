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

	$etat=$_POST["etat"];
	$id=$_POST["id"];
/*
$etat=0;
	$id=7;*/

 $requete = $db->query('UPDATE profiladmin SET etatBlocage= "'.!$etat.'" WHERE idOp="'.$id.'" ');
            
        
}

?>