"use strict"
const fs = require("fs");
const path = require('path');
const filePath = path.join(__dirname, '/html/timeline-vis.html');

module.exports = (context, callback) => {
  fs.readFile(filePath, (err, html) => {
    if (err) {
      return callback(err, undefined);

    }
    callback(undefined, html);
  })

}
