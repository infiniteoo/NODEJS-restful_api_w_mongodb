const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

//connect to mongoose
connectDB();

