/**
 * Created by Andre on 4-4-2015.
 */
var http = require("http");
var express = require("express");
var app = express();

//Define the new route folder to be used by the web server
app.use(express.static(__dirname + "/public"))

var hb = require("express-handlebars");
app.engine("handlebars", hb());
//Use Handlebars view engine within Express
app.set("view engine", "handlebars");

//The web server should render the home view by default
app.get("/", function (req, res) {
  res.render("home", {title: "Hello from WebStorm", message: "Hi there!"});
});

app.get("/api/toppings", function (req, res) {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(["pepperoni", "sausage", "spinach", "mushrooms", "ham", "pineapple"]);
});

// Classic definition of a web server
var server = http.createServer(app);

server.listen(3000);

// This is dummy implementation of a web server that can be used as a http.createServer param
//function (req, res) {
//  res.write("<html>\n<body>\n  <h1>Hello from WebStorm</h1>\n</body>\n</html>");
//  res.end();
//}