<?php

//connect to the data base 
$conn = mysqli_connect('localhost', 'root','','json');




  //echo "Processing....";
  if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    echo 'POST: Your Name Is '.$_POST['name'];

    $query = "INSERT INTO users(name) VALUES('$name')";

    if(mysqli_query($conn, $query))
    {
        echo "User added...";
    }
    else
    {
        echo 'Error : '.musqli_error($conn);
    }
    
}

  if(isset($_GET['name'])){
      echo 'GET : Your Name Is '.$_GET['name'];
  }


?>