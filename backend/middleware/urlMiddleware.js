"use strict";
const express = require("express");
const fs = require("fs");
const path = require("path");
const validator = require("validator");

/*
    get database
*/
function returnDataBase() {
  let dataBase = fs.readFileSync(
    path.resolve(__dirname, "../../database.json")
  );
  let dataBaseJson = JSON.parse(dataBase.toString());
  return dataBaseJson;
}

function middlewareUrlValidUrl(req, res, next) {
  if (validator.isURL(req.body.url)) {
    next();
  } else {
    res.status(401).json({ message: "Please enter a Valid URL", status: 401 });
  }
}

function middlewareUrlShortId(req, res, next) {
  let usersJsonData = returnDataBase()["short_urls"];
  if (
    !usersJsonData[
      usersJsonData.indexOf(
        usersJsonData.find(({ shorturl }) => shorturl === req.body.shortid)
      )
    ]
  ) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "Please Try Converting again", status: 401 });
  }
}

module.exports = { middlewareUrlShortId, middlewareUrlValidUrl };
