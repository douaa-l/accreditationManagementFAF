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
/*

$nom="Conference xxxxx";
$lieu="alger";
$type="Conférence de presse";
$equipeA="MCA";
$equipeB="ESS";
$date="";
$dateLimite="";
$logoA="";
$logoB="";*/

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
$nom="event";
$lieu="plassa";
$type="Match";
$equipeA="";
$equipeB="";
$date=date('Y-m-d h:i:s',(strtotime("18-03-2021".""."12:07:00")));
$dateLimite=date('Y-m-d h:i:s',(strtotime("19-03-2021".""."12:05:00")));
$logoA="";
$logoB="";

*/

$inser = $db->query('INSERT INTO evenement (logoA,logoB,nomEvent,lieuEvent,equipeA,dateEvent,dateLimiteDemande,typeEvent,equipeB)
                                VALUES ("'.$logoA.'" ,"'.$logoB.'" ,"'.$nom.'" ,"'.$lieu.'","'.$equipeA.'","'.$date.  '","'.$dateLimite.'","'.$type.'","'.$equipeB.'")');
                               $input = '18-03-2021'.' '.'12:07:00';
                             
$date = strtotime($input);
echo date('D-M-Y H:i:s', $date);


?>