"use strict";
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_ACCESS_KEY)
  .then((result) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    user_urls: {
      type: Array,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
