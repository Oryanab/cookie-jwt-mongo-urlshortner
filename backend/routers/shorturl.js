"use strict";
const express = require("express");
const shortUrlRouter = express.Router();
const databaseClass = require("./url_class").DataBase;
const fs = require("fs");
const path = require("path");
const errorMiddleware = require("../middleware/urlMiddleware");
const moment = require("moment");
const mongoose = require("mongoose");
const { Url } = require("../database/mongoUrls");
const { User } = require("../database/mongoUsers");
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
    function will upload new short url to db
*/
function uploadNewShortUrl(url, shortid) {
  const newUrl = new Url({
    creationDate: moment().format("MMMM Do YYYY, h:mm:ss a"),
    redirectCount: 0,
    originalUrl: url,
    shorturl: shortid,
  });
  newUrl
    .save()
    .then((result) => {
      console.log("added");
    })
    .catch((err) => {
      console.log("faild");
    });
}

function uploadNewShortUrlToUser(username, url, shortid) {
  let newShortenUrl = new databaseClass(url, shortid);
  User.update(
    { username: username },
    { $push: { user_urls: { $each: [newShortenUrl] } } }
  )
    .then((result) => {
      console.log("added");
    })
    .catch((err) => {
      console.log("faild");
    });
}

function findUrlJsonByShortId(ShortId) {
  Url.find({ shorturl: ShortId })
    .then((result) => {
      return result[0];
    })
    .catch((err) => {
      return err;
    });
}

shortUrlRouter.post(
  "/",
  //errorMiddleware.middlewareUrlValidUrl,
  //errorMiddleware.middlewareUrlShortId,
  (req, res) => {
    if (req.body.username !== "Guest") {
      try {
        uploadNewShortUrlToUser(
          req.body.username,
          req.body.url,
          req.body.shortid
        );
        uploadNewShortUrl(req.body.url, req.body.shortid);
        res.status(200).json({ shorturl: req.body.shortid });
      } catch (e) {
        res.sendStatus(404);
      }
    } else {
      uploadNewShortUrl(req.body.url, req.body.shortid);
      res.status(200).json({ shorturl: req.body.shortid });
    }
  }
);

module.exports = shortUrlRouter;
