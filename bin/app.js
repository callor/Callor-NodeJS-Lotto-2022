var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");

var mongoose = require("mongoose");
var dbCon = mongoose.connection;
console.log("OK");
dbCon.once("open", (result) => {
  console.log("mongoDB OK", result);
});
//
dbCon.on("error", () => {
  console.err;
});

//
// Deprecation Warning
// const GITHUB_ISSUE = `gh7412`;
// const mongAtlas =
//     "mongodb+srv://callor:changdol88@cluster0.gthbi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const connectionString = `${mongAtlas}/${GITHUB_ISSUE}`;

// mongoose.connect(connectionString, { useNewUrlParser: true });
// const lottoModels = require("./models/lottoModels.js");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// var lottoData = require("./models/lottoData.js");
var lotto = require("../routes/lotto.js")(app, lottoModels);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
