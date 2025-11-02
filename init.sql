-- -- Tạo Database 'jwt' (Nếu chưa tồn tại)
-- CREATE DATABASE IF NOT EXISTS jwt;

-- -- Sử dụng Database 'jwt'
-- USE jwt;

-- -- Tạo bảng 'users'
-- CREATE TABLE IF NOT EXISTS users (
--     id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     username VARCHAR(255) NOT NULL
-- );

-- -- ✅ Thêm phần này để sửa plugin xác thực cho user root
-- ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'your_root_password';
-- ALTER USER 'your_username'@'%' IDENTIFIED WITH mysql_native_password BY 'your_user_password';
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_root_password';


-- CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY 'your_root_password';
-- GRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1' WITH GRANT OPTION;
-- ALTER USER 'root'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY 'your_root_password';
-- DROP USER 'root'@'localhost';
-- FLUSH PRIVILEGES;