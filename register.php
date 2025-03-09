<?php

// Шлях до файлу бази даних SQLite
$db_file = "database.sqlite";

// Створення підключення до бази даних SQLite
$conn = new SQLite3($db_file);

// Перевірка існування таблиці users, якщо не існує — створити
$conn->exec("CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)");

// Отримання даних з форми
$user_username = $_POST['username'];
$user_email = $_POST['email'];
$user_password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// Перевірка, чи існує користувач з такою електронною поштою
$sql_check = "SELECT * FROM users WHERE email = :email";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bindValue(':email', $user_email, SQLITE3_TEXT);
$result = $stmt_check->execute();

if ($result->fetchArray()) {
    echo "Error: A user with this email already exists.";
} else {
    // SQL запит для вставки даних
    $sql = "INSERT INTO users (username, email, password) VALUES (:username, :email, :password)";

    // Підготовка запиту
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':username', $user_username, SQLITE3_TEXT);
    $stmt->bindValue(':email', $user_email, SQLITE3_TEXT);
    $stmt->bindValue(':password', $user_password, SQLITE3_TEXT);

    // Виконання запиту
    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $conn->lastErrorMsg();
    }
}

$conn->close();
?>