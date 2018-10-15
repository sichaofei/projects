var express = require("express")
var app = express()
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next()
})
var path = require("path")
var mysql = require("mysql")
var bodyParser = require("body-parser")
app.use(bodyParser.json());
var path = require("path")
// 导入session
var session = require('express-session')
// 导入cookie
var cookieParser = require('cookie-parser');
// 使用 cookieParser 中间件;
app.use(cookieParser());
// 使用session
app.use(session({
    ////这里的name值得是cookie的name，默认cookie的name是：connect.sid
    //name: 'hhw',
    secret: 'keyboard cat',
    cookie: ('name', 'value', { path: '/', httpOnly: true, secure: false, maxAge: 600000 }),
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave: true,
    //强制“未初始化”的会话保存到存储。 
    saveUninitialized: true,

}))
// 首页保单

// 我的
var my = require("./static/json/my.json")
// 首页活动


// 首页消息
var adv = require("./static/json/adv.json")
// 首页问医生
// 首页数据
var home = require("./static/json/homepage.json")
// 服务
var server = require("./static/json/server.json")
// 生活
var live = require("./static/json/live.json")
// 服务理财财圈
var lc = require("./static/json/manage_mon.json")
// 服务育儿圈
var son = require("./static/json/Parentingcircle.json")
// 服务健康圈
var health = require("./static/json/healthycircle.json")
// 车主圈
var car = require("./static/json/owner.json")
app.get("/home", function (req, res) {
    res.send(home)
})
app.get("/active/:id", function (req, res) {
    var id = req.params.id
    var list = []
    list = home.nav.filter((item, index) => {
        return item.id == id
    })
    res.send(list)
})
app.get("/ask/:id", function (req, res) {
    var id = req.params.id
    var list = []
    list = home.nav.filter((item, index) => {
        return item.id == id
    })
    res.send(list)
})
app.get("/bd/:id", function (req, res) {
    var id = req.params.id
    var list = []
    list = home.nav.filter((item, index) => {
        return item.id == id
    })
    res.send(list)
})
app.get("/all/:id", function (req, res) {
    var id = req.params.id
    var list = []
    list = home.nav.filter((item, index) => {
        return item.id == id
    })
    res.send(list)
})

// app.get("/home/doctor", function (req, res) {
//     res.send(doctor)
// })
// app.get("/home/active", function (req, res) {
//     res.send(active)
// })
app.get("/home/adv", function (req, res) {
    res.send(adv)
})
app.get("/home/change", function (req, res) {
    var a = Math.ceil(Math.random() * home.singles.length - 2)
    var b = []
    if (a <= 0) {
        a += home.singles.length - 2
    }
    b.push(home.singles[0])
    for (var i = a; i < a + 2; i++) {
        b.push(home.singles[i])
    }
    res.send(b)

})
// app.get("/home/bd", function (req, res) {
//     res.send(bd)
// })
app.get("/my", function (req, res) {
    res.send(my)
    console.log(req.session)
})
app.get("/server", function (req, res) {
    res.send(server)
})
app.get("/live", function (req, res) {
    res.send(live)
})
app.get("/live/change", function (req, res) {
    var type = req.query.type || "全部"
    var list = []
    list = live.liveThree.filter((item, index) => {
        return item.type == type
    })
    res.send(list)
})
app.get("/live/search", function (req, res) {
    var q = req.query.q
    var list = []
    console.log(live.tj)
    list = live.tj.filter((item, index) => {
        return item.name.indexOf(q) != -1
    })
    res.send(list)
})
app.get("/live/:id", function (req, res) {
    var id = req.params.id
    var detail = []
    detail = live.tj.filter((item, index) => {
        return item.id == id
    })
    res.send(detail)
})
app.get("/server/lc", function (req, res) {
    res.send(lc)
})
app.get("/server/son", function (req, res) {
    res.send(son)
})
app.get("/server/health", function (req, res) {
    res.send(health)
})
app.get("/server/car", function (req, res) {
    var type = req.query.type || "suggest"

    var list = []
    list = car.data.filter((item, index) => {
        return item.type == type
    })

    res.send(list)


})
// 活动详情
app.get("/active/detail/:id", function (req, res) {
    console.log(1)
    var afterid = req.params.id
    var beforeid = req.query.id
    var list = []
    list = home.nav.filter((item, index) => {
        return item.id == beforeid
    })
    var arr = list[0].con[0].content
    let detail = arr.filter((item, index) => {
        return item.id == afterid
    })
    res.send(detail)

})

// 数据库
var user = require("./mysql/config")
var pool = mysql.createPool(user)
app.get("/reg", function (req, res) {
    var message = 'select * from loginReg'
    console.log(req)
    var password = req.query.password
    var username = req.query.username
    console.log(username, password)
    var message1 = `insert into loginReg values('','${username}','${password}','')`
    pool.getConnection(function (doc, data) {
        pool.query(message, function (err, data) {
            let arr = data.filter((item, index) => {
                return item.username == username
            })
            if (arr.length == 0) {
                pool.query(message1, function (err, data) {
                    if (!err) {
                        console.log(data)
                        res.send("1")
                    } else {
                        res.send("0")
                        console.log(err)
                    }
                })
            } else {
                res.send("用户名已存在")
            }
        })

    })
})
// 登陆
app.get("/login", function (req, res) {
    var username = String(req.query.username);
    var password = req.query.password
    var message = `select * from loginReg where username='${username}'`
    pool.getConnection(function (err, doc) {
        doc.query(message, function (er, data) {
            console.log(er)
            if (!er) {
                if (data.length == 0) {
                    res.send("用户名不存在")
                } else {
                    var users = data.filter((item, index) => {
                        return item.password == password
                    })
                    console.log(users)
                    if (users.length == 0) {
                        res.send("密码错误")
                    } else {
                        // req.session.message = users
                        res.send(users[0].username)
                    }
                }

            }
        })
    })
})

var list = []
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8081 });
wss.on('connection', function (ws) {
    console.log(uuid.v4())
    // console.log('client connected');
    ws.on('message', function (message) {
        list.push(message)

        ws.send(JSON.stringify(list))
    });
});


app.listen(9913, function () {
    console.log("port 9913")
})