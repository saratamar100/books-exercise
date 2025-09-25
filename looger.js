const path = require("path");
const fs = require("fs");
const logPath = path.join(__dirname, "log.txt");

function logger(req, res, next) {
  console.log("a call eas made");
  fs.appendFile(logPath, "a call was made\n", (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
  next();
}

module.exports = logger;
