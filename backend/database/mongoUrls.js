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

// {
//     "creationDate": "November 3rd 2021, 1:55:15 pm",
//     "redirectCount": 0,
//     "originalUrl": "https://www.youtube.com/watch?v=Ud5xKCYQTjM&t=316s",
//     "shorturl": "w3RRQywry"
//   },
