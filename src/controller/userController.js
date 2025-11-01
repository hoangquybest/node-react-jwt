import userService from "../services/userService";

const handleGetUsers = (req, res) => {
  const users = userService.getAllUsers();
  console.log(users);

  res.render("user");
};

const handleCreateUser = (req, res) => {
  const { email, username, password } = req.body;

  console.log(req.body);

  console.log(email, username, password);
  userService.createNewUser(email, username, password);

  res.send("User created successfully.");
};

module.exports = { handleGetUsers, handleCreateUser };
