"use strict";
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const shorturlRouter = require("./routers/shorturl");
const redirectRouter = require("./routers/cybr");
const userRouter = require("./routers/signUsers");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/shorturl/", shorturlRouter);
app.use("/cybr", redirectRouter);
app.use("/user", userRouter);
// app.use("/users", userRouter);

app.use("/", express.static(__dirname + "/dist")); // serve main path as static dir
app.get("/", function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(port);
