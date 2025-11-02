import userService from "../services/userService";

const handleGetUserPage = async (req, res) => {
  const users = await userService.getAllUsers();
  console.log(users);

  return res.render("user", { users });
};

const handleCreateUser = async (req, res) => {
  const { email, username, password } = req.body;

  console.log(req.body);

  console.log(email, username, password);

  const newUser = await userService.createNewUser(email, username, password);

  console.log("New user:", newUser);

  return res.redirect("/users");
};

module.exports = { handleGetUserPage, handleCreateUser };
