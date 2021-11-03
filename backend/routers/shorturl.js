"use strict";
const express = require("express");
const shortUrlRouter = express.Router();
const databaseClass = require("./url_class").DataBase;
const fs = require("fs");
const path = require("path");

const errorMiddleware = require("../middleware/urlMiddleware");

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

shortUrlRouter.post(
  "/",
  errorMiddleware.middlewareUrlValidUrl,
  errorMiddleware.middlewareUrlShortId,
  (req, res) => {
    let databaseUrl = returnDataBase();
    let allUsers = databaseUrl["users_database"];
    let newShortenUrl = new databaseClass(req.body.url, req.body.shortid);
    if (req.body.username !== "Guest") {
      try {
        const currentUser =
          allUsers[
            allUsers.indexOf(
              allUsers.find(({ username }) => username === req.body.username)
            )
          ];
        currentUser["user_urls"].push(newShortenUrl);
        databaseUrl["short_urls"].push(newShortenUrl);
        saveDataBase(databaseUrl);
        res.status(200).json(newShortenUrl);
      } catch (e) {
        res.sendStatus(404);
      }
    } else {
      databaseUrl["short_urls"].push(newShortenUrl);
      saveDataBase(databaseUrl);
      res.json(newShortenUrl);
    }
  }
);

module.exports = shortUrlRouter;
