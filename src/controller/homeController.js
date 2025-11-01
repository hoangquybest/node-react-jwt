const handleHelloWorld = (req, res) => {
  // model => get data from database

  const name = "Brian";
  return res.render("home.ejs", { name });
};

module.exports = { handleHelloWorld };
