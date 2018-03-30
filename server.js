
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//PASSPORT
var session = require("express-session");
var passport = require("./config/passport");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  // process.env.MONGODB_URI || "mongodb://localhost/giftcardlist",
  process.env.mongodb_URI || "mongodb://mcginnis92:mong0db@ds123129.mlab.com:23129/heroku_z1npkg2s",
  {
    useMongoClient: true
  }
);

// // Add GridFS for photo uploads
// var conn = mongoose.connection;
// var path = require('path');
// var fs = require('fs');
// var Grid = require('gridfs-stream');
// Grid.mongo = mongoose.mongo;
 
// conn.once('open', function () {
//     console.log('open Grid');
//     var gfs = Grid(conn.db);

//     // streaming to gridfs
//     // filename to store in mongodb
//     var writestream = gfs.createWriteStream({
//       filename: 'favicon.ico'
//     });
//     fs.createReadStream('./client/public/favicon.ico').pipe(writestream);

//     writestream.on('close', function (file) {
//         // do something with `file`
//         console.log(file.filename + ' Written To DB');
//     });
// });


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
