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

     $nom=$_POST["nom"];
$email=$_POST["email"];
$statut=$_POST["statut"];
$siege=$_POST["siege"];
$categ=$_POST["categ"];
$date=date('Y-m-d',(strtotime($_POST["date"])));
$logo=$_POST["logo"];
$id=$_POST["id"];
 /* 
$id=16;
$nom="elbiladTV";
$email="elbiladTV@gmail.com";
$statut="entreprise privée";
$siege="said hamdine alger";
$categ="TV";
$date="2012-03-01";
*/

 $requete = $db->query('UPDATE profiladmin SET nomOP="'.$nom.'",categOP="'.$categ.'", email="'.$email.'" ,statut="'.$statut.'" ,dateCreation="'.$date.'", siegeSocial="'.$siege.'", logoOP="'.$logo.'" WHERE  idOp="'.$id.'"');
            
         
        
       
  
}

?>