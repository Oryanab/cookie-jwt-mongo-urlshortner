const myjson = [
  {
    creationDate: "November 2nd 2021, 6:20:34 pm",
    redirectCount: 0,
    originalUrl: "myurl",
    shorturl: "zfbSHeDxZH",
  },
  {
    creationDate: "November 2nd 2021, 6:20:34 pm",
    redirectCount: 0,
    originalUrl: "myurl",
    shorturl: "zfbHeDxZH",
  },
  {
    creationDate: "November 2nd 2021, 6:20:34 pm",
    redirectCount: 0,
    originalUrl: "myurl",
    shorturl: "zfeDxZH",
  },
];

console.log(myjson.find(({ shorturl }) => shorturl === "zfeDxZH"));
console.log(
  myjson.indexOf(myjson.find(({ shorturl }) => shorturl === "zfeDxZH"))
);
myjson[2].redirectCount = 1;
console.log(myjson.find(({ shorturl }) => shorturl === "zfeDxZH"));
