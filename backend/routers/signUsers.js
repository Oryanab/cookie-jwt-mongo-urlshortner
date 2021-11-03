"use strict";
const express = require("express");
const userRouter = express.Router();
const userDataBaseClass = require("./url_class").UserDataBase;
const fs = require("fs");
const path = require("path");
const errorMiddleware = require("../middleware/userMiddleware");

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

/*
      save database
  */
function saveDataBase(dataBaseJson) {
  fs.writeFileSync("database.json", Buffer.from(JSON.stringify(dataBaseJson)));
}

/*
      sign up the user
*/
const usernameValidator = errorMiddleware.middlewareSignUpUsername;
const emailValidator = errorMiddleware.middlewareSignUpEmail;
const passwordValidator = errorMiddleware.middlewareSignUpPassword;
userRouter.post(
  "/sign-up",
  usernameValidator,
  emailValidator,
  passwordValidator,
  (req, res) => {
    let database = returnDataBase();
    let newUser = new userDataBaseClass(
      req.body.name,
      req.body.email,
      req.body.password
    );
    database["users_database"].push(newUser);
    saveDataBase(database);
    res.status(200).json({ message: "Successfully Registered", status: 200 });
  }
);

/*
      sign up the user
*/
userRouter.post("/login", (req, res) => {
  let database = returnDataBase();
  let allUsers = database["users_database"];
  try {
    const currentUser =
      allUsers[
        allUsers.indexOf(allUsers.find(({ email }) => email === req.body.email))
      ];
    if (
      currentUser.email === req.body.email &&
      currentUser.password === req.body.password
    ) {
      res.status(200).json(currentUser);
    } else {
      res.status(401).json({ message: "Wrong Password", status: 401 });
    }
  } catch (e) {
    res.status(404).json({ message: "User Must Sign Up", status: 404 });
  }
});

userRouter.get("/all-short-urls", (req, res) => {
  let database = returnDataBase();
  let allUsers = database["users_database"];
  try {
    const currentUser =
      allUsers[
        allUsers.indexOf(
          allUsers.find(({ username }) => username === req.headers.username)
        )
      ];
    res.status(200).json(currentUser.user_urls);
  } catch (e) {
    res.sendStatus(404);
  }
});

module.exports = userRouter;
