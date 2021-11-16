"use strict";
const express = require("express");
const fs = require("fs");
const path = require("path");
const validator = require("validator");
const mongoose = require("mongoose");
const { Url } = require("../database/mongoUrls");

function middlewareUrlValidUrl(req, res, next) {
  if (validator.isURL(req.body.url)) {
    next();
  } else {
    res.status(401).json({ message: "Please enter a Valid URL", status: 401 });
  }
}

function middlewareUrlShortId(req, res, next) {
  Url.find({ shorturl: req.body.shortid })
    .then((result) => {
      if (result.length === 0) {
        next();
      } else {
        res
          .status(401)
          .json({ message: "Please Try Converting again", status: 401 });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "server error", status: 500 });
    });
}

module.exports = { middlewareUrlShortId, middlewareUrlValidUrl };
