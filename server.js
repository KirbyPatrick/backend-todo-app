const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

mongoose.connect("mongodb://backend-todo-user:<dbpassword>@ds157136.mlab.com:57136/backend-todo")

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
