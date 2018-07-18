// this is to create the setup for our database of users, 
// do we add userdata that will be updated later, like games played and games won here?
// if we have 3 games and user adds a point to a counter for each win of a game how does that look in the schema?

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  Email: { type: String, required: true}

});

const Users = mongoose.model("Users", bookSchema);

module.exports = Users;