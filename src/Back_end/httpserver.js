// const http = require("http");
// const routehandler = require("./routes/routes");
// http.createServer(routehandler).listen(1010);
// console.log("server started");
// console.log("the current working process is" + process.version);
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});
con.query("SELECT * FROM USERS", (err, rows) => {
  if (err) {
    throw err;
  }
  console.log("created");
});
