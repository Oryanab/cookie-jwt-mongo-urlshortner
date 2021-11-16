const express = require("express");
const cybrRouter = express.Router();
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { Url } = require("../database/mongoUrls");

/*
      fucntion receive short url id and gets the original one
*/

cybrRouter.get("/:shorturl", (req, res) => {
  Url.findOneAndUpdate({ shorturl: req.params.shorturl })
    .then((urlUnit) => {
      urlUnit.redirectCount++;
      res.redirect(urlUnit.originalUrl);
    })
    .catch((err) => {
      res.redirect("/");
      res.status(404).json({ message: "This Url Is Not Exist", status: 404 });
    });
});

module.exports = cybrRouter;
