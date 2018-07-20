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
        email: "testemail@fake.com",
        gameOneLevel: 3,
        gameTwoLevel: 1,
        gameThreeLevel: 0
    },
    {
        firstName: "Neko",
        lastName: "Thecat",
        email: "testemail2@fake.com",
        gameOneLevel: 0,
        gameTwoLevel: 0,
        gameThreeLevel: 0

    }
]