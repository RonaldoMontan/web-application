<?php
include 'protection.php';
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h1>Your Welcome, <?= $_SESSION['user_name'] ?>!</h1>
    <p>Your internal ID is: <?= $_SESSION['user_id'] ?></p>
    <a href="logout.php">Logout</a>
</body>
</html>