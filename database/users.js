const mongoose = require("./connect");
var USERSCHEMA = {
  name     : String,
  lastname : String,
  address  : String,
  age      : Number,
  nickname : String,
  registerDate : Date,
  updateDate   : Date
}
const USERS = mongoose.model("users",USERSCHEMA);
module.exports = USERS;
