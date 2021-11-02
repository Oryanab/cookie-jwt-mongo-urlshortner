const express = require("express");
const cybrRouter = express.Router();
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

cybrRouter.get("/:shorturl", (req, res) => {
  let originalDataBase = returnDataBase();
  let databaseUrl = originalDataBase["short_urls"];
  let urlDatabaseUnit = databaseUrl.indexOf(
    databaseUrl.find(({ shorturl }) => shorturl === req.params.shorturl)
  );
  databaseUrl[urlDatabaseUnit].redirectCount++;
  saveDataBase(originalDataBase);
  res.redirect(databaseUrl[urlDatabaseUnit].originalUrl);
});

module.exports = cybrRouter;
