import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

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

const getAllUsers = async () => {
  // Create the connection to database
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  let users = [];
  // connection.query("SELECT * FROM users", (err, results) => {
  //   if (err) {
  //     console.error("Error fetching users:", err);
  //     return users;
  //   }
  //   users = results;
  //   return users;
  // });
  try {
    const [rows, fields] = await connection.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createNewUser, getAllUsers };
