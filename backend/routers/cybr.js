const express = require("express");
const cybrRouter = express.Router();
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { Url } = require("../database/mongoUrls");
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
      fucntion receive short url id and gets the original one
*/

cybrRouter.get("/:shorturl", (req, res) => {
  Url.findOneAndUpdate({ shorturl: req.params.shorturl })
    .then((urlUnit) => {
      urlUnit.redirectCount++;
      res.redirect(urlUnit.originalUrl);
    })
    .catch((err) => {
      res.redirect("/");
      res.status(404).json({ message: "This Url Is Not Exist", status: 404 });
    });
  // let originalDataBase = returnDataBase();
  // let databaseUrl = originalDataBase["short_urls"];
  // try {
  //   let urlDatabaseUnit = databaseUrl.indexOf(
  //     databaseUrl.find(({ shorturl }) => shorturl === req.params.shorturl)
  //   );
  //   databaseUrl[urlDatabaseUnit].redirectCount++;
  //   saveDataBase(originalDataBase);
  //   res.redirect(databaseUrl[urlDatabaseUnit].originalUrl);
  // } catch (err) {
  //   res.redirect("/");
  //   res.status(404).json({ message: "This Url Is Not Exist", status: 404 });
  // }
});

module.exports = cybrRouter;
