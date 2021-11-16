"use strict";
const express = require("express");
const userRouter = express.Router();
const userDataBaseClass = require("./url_class").UserDataBase;
const fs = require("fs");
const path = require("path");
const errorMiddleware = require("../middleware/userMiddleware");
const mongoose = require("mongoose");
const { User } = require("../database/mongoUsers");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");
require("dotenv").config();

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
      passwordEncrypt
*/
async function encryptPassword(password) {
  try {
    const hashedPassword = await bycrypt.hash(password, 10);
    return hashedPassword;
  } catch (e) {
    res.status(500).json({ message: "password creation failed" });
  }
}

/*
      sign up the user mongo
*/
function signUpNewUser(username, email, password) {
  const newUser = new User({
    username: username,
    email: email,
    password: password,
    user_urls: [],
  });
  newUser
    .save()
    .then((result) => {
      console.log("added");
    })
    .catch((err) => {
      console.log("faild");
    });
}

/*
      sign up the user
*/
const usernameValidator = errorMiddleware.middlewareSignUpUsername;
const emailValidator = errorMiddleware.middlewareSignUpEmail;
const passwordValidator = errorMiddleware.middlewareSignUpPassword;
userRouter.post(
  "/sign-up",
  // usernameValidator,
  // emailValidator,
  // passwordValidator,
  async (req, res) => {
    let encryptedPassword = await encryptPassword(req.body.password);
    signUpNewUser(req.body.name, req.body.email, encryptedPassword);
    res.status(200).json({ message: "Successfully Registered", status: 200 });
  }
);

/*
      sign up the user
*/
userRouter.post("/login", (req, res) => {
  try {
    User.findOne({ email: req.body.email })
      .then((currentUser) => {
        if (bycrypt.compare(req.body.password, currentUser.password)) {
          // Auth The Cookie
          const username = currentUser.username;
          const loggedUser = { name: username };
          // in terminal: require('crypto').randomBytes(64).toString('hex')
          const accessToken = jwt.sign(loggedUser, process.env.SECRET_TOKEN, {
            expiresIn: "1m",
          });
          //document.cookie = `accessToken:${accessToken}` + new Date(day.getDate() + 1);
          res.json({
            username: currentUser.username,
            accessToken: accessToken,
          });
        } else {
          res.status(401).json({ message: "Wrong Password", status: 401 });
        }
      })
      .catch((err) => {
        return false;
      });
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

userRouter.get("/check", authenticateToken, (req, res) => {
  res.json({ username: req.user.name });
});
// Auth jwt middleware

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.sendStatus(401);
  } else {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      } else {
        req.user = user;
        next();
      }
    });
  }
}

module.exports = userRouter;
