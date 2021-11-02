"use strict";
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const shorturlRouter = require("./routers/shorturl");
const redirectRouter = require("./routers/cybr");
// process.env.PORT ||

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/shorturl/", shorturlRouter);
app.use("/cybr", redirectRouter);
// app.use("/users", userRouter);

app.use("/", express.static("./dist")); // serve main path as static dir
app.get("/", function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(port);
