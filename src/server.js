import express from "express";
import configureViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
// import connection from "./config/connectDB";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// configure view engine
configureViewEngine(app);

// Configure body parser to handle POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test connection
// connection();

// init web routes
initWebRoutes(app);

// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
