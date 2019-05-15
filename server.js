const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

mongoose.connect(
  "mongodb://backend-todo-user:Backend1@ds157136.mlab.com:57136/backend-todo",
  {
    useNewUrlParser: true
  },
  function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("connected to the database");
    }
  }
);

app.use(cors()); 
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
