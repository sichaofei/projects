var app = require('express')();
var express = require("express")
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/chart.html")
});
var list = []
app.get("/login", function (req, res) {
    var name = req.query.name
    console.log(list)
    if (list.length == 0) {
        list.push(name)
        io.emit("num", list)
        res.send(name)
    } else {
        var user = list.filter((item, index) => {
            return item == name
        })
        if (user.length == 0) {
            list.push(name)
            io.emit("num", list)
            res.send(name)
        } else {
            res.send("0")
        }
    }
})
var user = []
// 用户数量
var person = []
io.on('connection', function (socket) {
    io.emit("num", list)
    socket.on("person", function (data) {
        io.emit("num", list)
        var onePerson = data
        io.emit("all", data)
        // if (person.length == 0) {
        //     person.push(data)
        // } else {
        //     var a = person.filter((item, index) => {
        //         return item == data
        //     })
        //     if (a.length == 0) {
        //         person.push(data)
        //     } else {

        //     }
        // }

        socket.on('disconnect', function () {
            var index = person.findIndex(item => item == onePerson)
            list.splice(index, 1)
            io.emit("num", list)
        });
    })
    socket.on("sendMsg", function (msg) {
        user.push(msg)
        io.emit("newMsg", msg)
    })
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
