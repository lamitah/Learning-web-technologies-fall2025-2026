<?php
session_start();

if (!isset($_SESSION['username']) || !isset($_COOKIE['status']) || $_COOKIE['status'] !== 'true') {

    header('location: login.html');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Hotel Management - Home</title>
</head>

<body>
    <h1>Welcome to Hotel Management System, <?php echo $_SESSION['username']; ?>!</h1>
    <a href="logout.php">Logout</a>
</body>

</html>