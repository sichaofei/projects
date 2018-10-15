var express = require("express")
app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json());
var fs = require("fs")
var session = require('cookie-session')
// 导入cookie
var cookieParser = require('cookie-parser');
app.use(express.static('public'));
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next()
})
// 使用 cookieParser 中间件;
app.use(cookieParser());
// 使用session
app.use(
    session({
        name: "one",
        keys: ["aa", "bb", "cc"]
    })
)
// s%3AYCbGcXGfph1K8iyJ5qmzu9C19DDUOGmM.%2FZ%2BAJK2K88epQXeCGVubOha5xA1gYPm1R8FCPlc7%2FSk
var list = [{ name: "scf", password: "123" }]
function yanzheng(req, res) {
    var user = req.query.username || req.body.username
    var password = req.query.password || req.body.password
    var num = list.filter((item, index) => {
        return item.name == user
    })
    if (num.length == 0) {
        res.send("用户名错误")
    } else {
        var arr = num.filter((item, index) => {
            return item.password == password
        })
        if (arr.length == 0) {
            res.send("密码错误")
        } else {
            req.session['name'] = user
            console.log(req.session)
            res.send("成功")
        }
    }
}
app.get("/", function (req, res) {
    fs.readFile("./login.html", "utf-8", function (err, data) {
        res.send(data)
    })
})
// s%3AKo-OnMIt-wsTaDnwyXQnI2GO8lED9xiE.RJrbVXlVUkc2tXZZDI1w8SEnndjPvdpzoT5hIwNIVow
app.get("/index", function (req, res) {
    console.log(req.session)
    if (req.session["name"] == "scf") {
        fs.readFile("./index.html", "utf-8", function (err, data) {
            res.send(data)
        })
    } else {
        fs.readFile("./login.html", "utf-8", function (err, data) {
            res.send(data)
        })
    }
})
app.get("/login", function (req, res) {
    yanzheng(req, res)
})
app.post("/login", function (req, res) {
    yanzheng(req, res)
})
app.listen(9901, function () {
    console.log(9901)
})