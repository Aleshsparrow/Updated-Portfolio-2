const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
name:{
  type: String,
  trim: true,
  required: "String is Required"
},
email: {
  type: String,
  match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
},
userCreated: {
  type: Date,
  default: Date.now
}

});

const Client = mongoose.model("User", UserSchema);

module.exports = Client;
