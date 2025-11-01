import bcrypt from "bcryptjs";
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = (email, username, password) => {
  // Logic to create a new user
  let bcryptedPassword = hashPassword(password);

  connection.query(
    "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [email, username, bcryptedPassword],
    (err, results) => {
      if (err) {
        console.error("Error inserting user:", err);
        return false;
      }
      console.log("User created with ID:", results.insertId);
      return true;
    }
  );
};

const getAllUsers = () => {
  let users = [];
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return [];
    }
    console.log("Users:", results);
    return results;
  });
};

module.exports = { createNewUser, getAllUsers };
