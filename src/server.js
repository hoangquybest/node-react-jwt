import express from "express";
import configureViewEngine from "./configs/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import bodyParser from "body-parser";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// configure view engine
configureViewEngine(app);

// Configure body parser to handle POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init web routes
initWebRoutes(app);

// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
