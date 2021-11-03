"use strict";
const validator = require("validator");
const express = require("express");
const fs = require("fs");
const path = require("path");

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

function middlewareSignUpUsername(req, res, next) {
  let usersJsonData = returnDataBase()["users_database"];
  if (
    !usersJsonData[
      usersJsonData.indexOf(
        usersJsonData.find(({ username }) => username === req.body.name)
      )
    ]
  ) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "Username already being used", status: 401 });
  }
}

function middlewareSignUpEmail(req, res, next) {
  let usersJsonData = returnDataBase()["users_database"];
  if (
    validator.isEmail(req.body.email) &&
    !usersJsonData[
      usersJsonData.indexOf(
        usersJsonData.find(({ email }) => email === req.body.email)
      )
    ]
  ) {
    next();
  } else {
    res.status(401).json({ message: "Email already being used", status: 401 });
  }
}

function middlewareSignUpPassword(req, res, next) {
  if (validator.isStrongPassword(req.body.password)) {
    next();
  } else {
    res.status(401).json({ message: "Password Too Weak", status: 401 });
  }
}

module.exports = {
  middlewareSignUpUsername,
  middlewareSignUpEmail,
  middlewareSignUpPassword,
};
