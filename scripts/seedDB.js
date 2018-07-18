const mongoose = require("mongoose");
const db = require("../models");

// dummy user data

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/react-space-cats"
);

const usersSeed = [
    {
        firstName: "Cora",
        lastName: "Thecat",
        email: "testemail@fake.com"
    }
]