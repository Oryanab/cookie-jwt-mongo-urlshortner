"use strict";
const moment = require("moment");
const shortid = require("shortid");
/*
  url DataBase
*/
class DataBase {
  constructor(originalUrl) {
    this.creationDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    this.redirectCount = 0;
    this.originalUrl = originalUrl;
    this.shorturl = shortid.generate();
  }

  getSingleDataBase() {
    return new DataBase(
      this.originalUrl,
      this.shorturl,
      this.creationDate,
      this.redirectCount
    );
  }
}

module.exports = DataBase;
