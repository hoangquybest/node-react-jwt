import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models";
import { raw } from "body-parser";

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

const createNewUser = async (email, username, password) => {
  // Create the connection to database
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "your_root_password",
  //   database: "jwt",
  //   port: 3307,
  //   Promise: bluebird,
  // });

  // Logic to create a new user
  let bcryptedPassword = hashPassword(password);

  // connection.query(
  //   "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
  //   [email, username, bcryptedPassword],
  //   (err, results) => {
  //     if (err) {
  //       console.error("Error inserting user:", err);
  //       return false;
  //     }
  //     console.log("User created with ID:", results.insertId);
  //     return true;
  //   }
  // );

  // try {
  //   const sql =
  //     "INSERT INTO `users`(`email`, `username`, `password`) VALUES (?, ?, ?)";
  //   const values = [email, username, bcryptedPassword];

  //   const [result, fields] = await connection.execute(sql, values);

  //   console.log(result);
  //   console.log(fields);
  //   return result;
  // } catch (err) {
  //   console.log(err);
  // }

  try {
    const newUser = await db.User.create({
      email: email,
      username: username,
      password: bcryptedPassword,
    });
    return newUser;
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async () => {
  let users = [];

  let user = await db.User.findOne({
    where: { id: 1 },
    include: { model: db.Group },
    nest: true,
    raw: true,
  });

  console.log(">>>Check user:", user);

  try {
    users = await db.User.findAll();
  } catch (error) {
    console.log(error);
  }

  console.log(users);

  return users;

  // Create the connection to database
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "your_root_password",
  //   database: "jwt",
  //   port: 3307,
  //   Promise: bluebird,
  // });

  // connection.query("SELECT * FROM users", (err, results) => {
  //   if (err) {
  //     console.error("Error fetching users:", err);
  //     return users;
  //   }
  //   users = results;
  //   return users;
  // });
  // try {
  //   const [rows, fields] = await connection.query("SELECT * FROM users");
  //   return rows;
  // } catch (error) {
  //   console.log(error);
  // }
};

module.exports = { createNewUser, getAllUsers };
