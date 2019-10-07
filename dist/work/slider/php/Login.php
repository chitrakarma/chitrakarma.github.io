<?php
    $host = "localhost";    //name of the localhost
    $user = "root";         //name of the db user
    $pass = "";             //password of db
    $db = "testdb";         //name of the db to use
    $mysqli = new mysqli($host,$user,$pass,$db);  //creating new conneciton
    if($mysqli->errno){         //checking for errors
        printf("Unable to connect to the database: <br /> %s", $mysqli->error);         //returning error number
        exit();
    }
    $usern = $_POST['username'];
    $passw = $_POST['password'];
    $sql = "SELECT password, usern from data;";
    $result = $mysqli->query($sql, MYSQLI_STORE_RESULT);       //storing result in a variable
    while(list($password,$username) = $result->fetch_row()){        //fetching password and username from the db table
        if((strcmp($password,$passw)==0)&&(strcmp($username,$usern)==0)){     //comparing username and password from the table in db
            header("Location: ../html/Home.html");
        }
    }
?>