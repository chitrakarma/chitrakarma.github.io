<?php
$mysqli = new mysqli("localhost","root","");
$mysqli->select_db("testdb");
$sql = "CREATE TABLE something (name varchar(20));";
$mysqli->query($sql);
echo "table created<br />";
echo "everything done <br />";
$mysqli->close();
echo "closed"
?>