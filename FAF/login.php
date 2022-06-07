<?php



try{
        $db= new PDO('mysql:host=localhost;dbname=faf_accreditations;charset=utf8', 'root', '');

    }
    catch(Exception $e)
    {
        die ('ereeur '.$e->getMessage());
    }
     $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

     
     
     
     
     $results['error'] = false;
      $results['message'] = "";
      $results['id_user'] = "";
      $results['nomAdmin']="";




if(isset($_POST)){

               $user=$_POST['username'];
               $pass=$_POST['password'];
               
          $requete = $db->query("SELECT idOp  FROM profiladmin WHERE pseudo= '$user'");
           $row1 = $requete->fetch();
           if($row1 != false){
              $requete = $db->query("SELECT idOp FROM  profiladmin WHERE pseudo= '$user'AND motDePasse= '$pass'");
               $row2 = $requete->fetch();
               if($row2!= false){
               
                 $results['message'] = "Bienvenue Admin";
                 $results['id_user']= $row2['idOp'];
                 $results['nomAdmin']=$user;
               }
               else{
                  $results['error'] = TRUE;
                  $results['message'] = "Pseudo ou Mot de passe incorrect";
               }
           }
           else{
              $results['error'] = TRUE;
                  $results['message'] = "Pseudo ou Mot de passe incorrect";
           }
   
            
}
  
 echo json_encode($results);
     
     
     
   
  

?>



      