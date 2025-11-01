import userService from "../services/userService";

const handleGetUserPage = async (req, res) => {
  const users = await userService.getAllUsers();
  console.log(users);

  res.render("user", { users });
};

const handleCreateUser = (req, res) => {
  const { email, username, password } = req.body;

  console.log(req.body);

  console.log(email, username, password);
  userService.createNewUser(email, username, password);

  res.send("User created successfully.");
};

module.exports = { handleGetUserPage, handleCreateUser };
