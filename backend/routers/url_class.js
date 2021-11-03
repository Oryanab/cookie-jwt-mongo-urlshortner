"use strict";
const moment = require("moment");

/*
  url DataBase
*/
class DataBase {
  constructor(originalUrl, shortid) {
    this.creationDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    this.redirectCount = 0;
    this.originalUrl = originalUrl;
    this.shorturl = shortid;
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

class UserDataBase {
  constructor(username, email, password) {
    (this.username = username),
      (this.email = email),
      (this.password = password),
      (this.user_urls = []);
  }

  getSingleDataBase() {
    return new DataBase(
      this.username,
      this.email,
      this.password,
      this.user_urls
    );
  }
}

// let nina = new DataBase("myurl");
// console.log(nina.getSingleDataBase());

module.exports = { DataBase, UserDataBase };
