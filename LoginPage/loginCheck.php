<?php
session_start();

// Check if form was submitted
if (isset($_POST['submit'])) {
    // Get the username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];


    if ($username == "" || $password == "") {
        echo "Please enter both username and password.";
    } else {

        if ($username == "admin" && $password == "admin") {

            setcookie('status', 'true', time() + 3000, '/');


            $_SESSION['username'] = $username;


            header('location: home.php');
            exit();
        } else {
            echo "Invalid username/password. Please try again.";
        }
    }
} else {

    header('location: login.html');
    exit();
}
?>