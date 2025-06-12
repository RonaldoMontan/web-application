<?php
session_start();
session_destroy(); // Destroi a sessão do user
header("location: login.php");
exit();
?>