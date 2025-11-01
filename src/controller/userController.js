// Get the client
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const handleUserRequest = (req, res) => {
  res.render("user");
};

const handleCreateUser = (req, res) => {
  console.log("Request Body:", req.body);
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  });
  res.send("User created successfully.");
};
module.exports = { handleUserRequest, handleCreateUser };
