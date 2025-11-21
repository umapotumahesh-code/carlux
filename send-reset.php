<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Generate reset token (you would normally save this in DB)
    $token = bin2hex(random_bytes(16));
    $resetLink = "http://yourdomain.com/reset-password.php?token=" . $token;

    // Email details
    $subject = "Password Reset Request - Online Academy";
    $message = "Hello,\n\nClick the link below to reset your password:\n$resetLink\n\nIf you didn’t request this, ignore this email.";
    $headers = "From: no-reply@yourdomain.com";

    if (mail($email, $subject, $message, $headers)) {
        echo "✅ Reset link sent! Please check your email.";
    } else {
        echo "❌ Failed to send email. Check your server mail configuration.";
    }
}
?>