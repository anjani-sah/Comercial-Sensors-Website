<?php
// db_connect.php

$servername = "localhost"; // Change if your MySQL server is hosted elsewhere
$username = "root"; // Replace with your MySQL username
$password = "root"; // Replace with your MySQL password
$dbname = "payroll_management";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
