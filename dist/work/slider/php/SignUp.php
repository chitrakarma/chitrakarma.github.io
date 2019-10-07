<?php
    include "createdb.php";
    echo "Hello ".$_POST["fname"]." ".$_POST["lname"]." welcome!";
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $dob = $_POST["date"];
    $pass = $_POST["pass"];
    $usern = $_POST["username"];
    $query = "CREATE TABLE data(fname char(15),lname char(15), dob date,password char(20),usern char(20))";
    $conn->exec($query);
    $ins = "INSERT INTO data VALUES('$fname','$lname','$dob','$pass','$usern')";
    $conn->exec($ins);
    header("Location: ../html/Home.html");


    //form validation is pending
?>