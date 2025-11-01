-- Tạo Database 'jwt' (Nếu chưa tồn tại)
CREATE DATABASE IF NOT EXISTS jwt;

-- Sử dụng Database 'jwt'
USE jwt;

-- Tạo bảng 'users'
CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL
);
