const express = require("express");
const shortUrlRouter = express.Router();
const databaseClass = require("./url_class");
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

/*
      save database
  */
function saveDataBase(dataBaseJson) {
  fs.writeFileSync("database.json", Buffer.from(JSON.stringify(dataBaseJson)));
}

shortUrlRouter.post("/", (req, res) => {
  let databaseUrl = returnDataBase();
  databaseUrl["short_urls"].push(new databaseClass(req.body.url));
  saveDataBase(databaseUrl);
  res.json(databaseUrl);
});

module.exports = shortUrlRouter;
