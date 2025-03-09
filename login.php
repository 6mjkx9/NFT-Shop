<?php
session_start();

// Шлях до файлу бази даних SQLite
$db_file = "database.sqlite";

// Підключення до бази даних SQLite
$conn = new SQLite3($db_file);

// Перевірка, чи були надіслані дані
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // SQL запит для отримання користувача за username
    $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = :username");
    $stmt->bindValue(':username', $username, SQLITE3_TEXT);
    $result = $stmt->execute();

    // Якщо користувача не знайдено
    if ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        // Перевірка пароля
        if (password_verify($password, $row['password'])) {
            // Пароль правильний, зберігаємо інформацію в сесії
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['username'] = $row['username'];

            // Перенаправлення на головну сторінку або панель користувача
            header("Location: home.html");
            exit;
        } else {
            // Неправильний пароль
            $error_message = "Incorrect password.";
        }
    } else {
        // Користувача з таким username не знайдено
        $error_message = "No user found with that username.";
    }
}

// Закриття підключення до бази
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Minimal NFT Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav class="container">
            <button class="menu-btn" aria-label="Open menu">☰</button>
            <div class="logo">
                <h2>Minimal NFT</h2>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Login</h1>
                <p>Access your NFT collection and account.</p>
            </div>
        </section>

        <section class="container">
            <form class="auth-form" method="POST" action="login.php">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <button type="submit">Login</button>
                </div>
                <?php if (isset($error_message)): ?>
                    <div class="error-message">
                        <p><?php echo $error_message; ?></p>
                    </div>
                <?php endif; ?>
            </form>
            <p>Don't have an account? <a href="register.html">Register here</a></p>
        </section>
    </main>

    <div class="popup-menu">
        <button class="close-menu" aria-label="Close menu">✕</button>
        <nav class="menu-items">
            <ul>
                <li><a href="index.html">Logo</a></li>
                <li><a href="home.html">Explore NFTs</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
        </nav>
    </div>

    <script src="script.js"></script>
</body>
</html>
