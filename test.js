// "use strict";
const validator = require("validator");

// Validate against a password string
console.log(validator.isURL(""));

// => true
console.log(validator.isStrongPassword("ppp"));

// => false
// function createRow(link) {
//   const parentDivBottom = document.getElementById("bottom");
//   // create the row
//   const row = document.createElement("div");
//   row.classList.add("row");
//   const rowLink = document.createElement("div");
//   rowLink.classList.add("link");
//   const newlink = document.createElement("a");
//   newlink.setAttribute("href", link);
//   newlink.textContent = link;

//   // append all together
//   rowLink.append(newlink);
//   row.append(rowLink);
//   parentDivBottom.append(row);
// }
// createRow("dddddd");

// // const myjson = [
// //   {
// //     creationDate: "November 2nd 2021, 6:20:34 pm",
// //     redirectCount: 0,
// //     originalUrl: "myurl",
// //     shorturl: "zfbSHeDxZH",
// //   },
// //   {
// //     creationDate: "November 2nd 2021, 6:20:34 pm",
// //     redirectCount: 0,
// //     originalUrl: "myurl",
// //     shorturl: "zfbHeDxZH",
// //   },
// //   {
// //     creationDate: "November 2nd 2021, 6:20:34 pm",
// //     redirectCount: 0,
// //     originalUrl: "myurl",
// //     shorturl: "zfeDxZH",
// //   },
// // ];

// // console.log(myjson.find(({ shorturl }) => shorturl === "zfeDxZH"));
// // console.log(
// //   myjson.indexOf(myjson.find(({ shorturl }) => shorturl === "zfeDxZH"))
// // );
// // myjson[2].redirectCount = 1;
// // console.log(myjson.find(({ shorturl }) => shorturl === "zfeDxZH"));
