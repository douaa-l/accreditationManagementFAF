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


$nom=$_POST["nom"];
$email=$_POST["email"];
$statut=$_POST["statut"];
$siege=$_POST["siege"];
$categ=$_POST["categ"];
$date=date('Y-m-d',(strtotime($_POST["date"])));
$logo=$_POST["logo"];

/*
$nom="elbilad";
$email="elbilad@gmail.com";
$statut="entreprise privée";
$siege="said hamdine alger";
$categ="TV";
$date=date('Y-m-d',(strtotime("2012/03/01")));
*/

$inser = $db->query('INSERT INTO profiladmin (pseudo,motDePasse,logoOP,nomOP,categOP,statut,dateCreation,siegeSocial,email,etatBlocage)
                                VALUES ("'.$nom.'" ,"'.$nom.'" ,"'.$logo.'" ,"'.$nom.'" ,"'.$categ.'","'.$statut.'","'.$date.  '","'.$siege.'","'.$email.'","1")');


?>