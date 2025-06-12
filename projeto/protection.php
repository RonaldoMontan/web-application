<?php
session_start(); // Verifica se o usuario está logado, caso não esteja, redireciona para a pagina de login.
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}
?>