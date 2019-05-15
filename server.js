const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require("./model");

mongoose.connect(
  "mongodb://backend-todo-user:Backend1@ds157136.mlab.com:57136/backend-todo",
  {
    useNewUrlParser: true
  },
  function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Connected to the MongoDB database!");
    }
  }
);

app.use(cors());
app.use(bodyParser.json());

todoRoutes.route("/").get(function(req, res) {
  Todo.find(function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

app.use("/todos", todoRoutes);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
