const { response } = require("express");
const mongoose = require("mongoose");

const VolunteersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});



module.exports =
  mongoose.model.Volunteers || mongoose.model("Volunteers", VolunteersSchema);
  
 
