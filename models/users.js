// this is to create the setup for our database of users, 
// do we add userdata that will be updated later, like games played and games won here?
// if we have 3 games and user adds a point to a counter for each win of a game how does that look in the schema?

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true},
  password: { type: String, required: true},
  gameOneLevel: { type: String},
  gameTwoLevel: { type: String},
  gameThreeLevel: { type: String},
  isDeleted: { type: Boolean, default: false}
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function (password) { 
  return bcrypt.compareSync(password, this.password);
 }

const Users = mongoose.model("Users", userSchema);

module.exports = Users;