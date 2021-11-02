"use strict";
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
// process.env.PORT ||

app.use(express.json());
app.use(cors());
// app.use("/pokemon", pokemonRouter);
// app.use("/users", userRouter);

app.use("/", express.static("./dist")); // serve main path as static dir
app.get("/", function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve("./dist/index.html"));
});

app.listen(port);
