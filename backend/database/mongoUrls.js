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

const urlSchema = new Schema(
  {
    creationDate: {
      type: String,
    },
    redirectCount: {
      type: Number,
    },
    originalUrl: {
      type: String,
    },
    shorturl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", urlSchema);

module.exports = { Url };


