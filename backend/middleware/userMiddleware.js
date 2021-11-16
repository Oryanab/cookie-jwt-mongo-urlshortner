"use strict";
const validator = require("validator");
const express = require("express");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { User } = require("../database/mongoUsers");

function middlewareSignUpUsername(req, res, next) {
  User.find({ username: req.body.name })
    .then((result) => {
      if (result.length === 0) {
        next();
      } else {
        res
          .status(401)
          .json({ message: "Username already taken", status: 401 });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "server error", status: 500 });
    });
}

function middlewareSignUpEmail(req, res, next) {
  User.find({ email: req.body.email })
    .then((result) => {
      if (result.length === 0) {
        next();
      } else {
        res
          .status(401)
          .json({ message: "Email already being used", status: 401 });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "server error", status: 500 });
    });
}

function middlewareSignUpPassword(req, res, next) {
  if (validator.isStrongPassword(req.body.password)) {
    next();
  } else {
    res.status(401).json({ message: "Password Too Weak", status: 401 });
  }
}

/*
    error 500
*/
function middlewareServerError(req, res, next) {
  if (res.statusCode !== 500) {
    next();
  } else {
    res.status(500).json({
      message: "Our servers had an internal problem please comeback later",
      status: 500,
    });
  }
}

/*
      error 404
  */
function middlewarePageNotFound(req, res, next) {
  if (res.statusCode !== 404) {
    next();
  } else {
    res.status(404).json({
      message: "page not exist",
      status: 404,
    });
  }
}

module.exports = {
  middlewareSignUpUsername,
  middlewareSignUpEmail,
  middlewareSignUpPassword,
  middlewareServerError,
  middlewarePageNotFound,
};
