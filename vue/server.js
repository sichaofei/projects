var express = require("express")
var app = express()
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next()
})
app.listen(8085, function () {
    console.log(8085)
})