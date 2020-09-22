var http = require("http");

//http://localhost:3000/

http.createServer(function (req, res) {
    var body = "hello Server";
    console.log("요청이 들어왔습니다.");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("안녕하세요");
}).listen(3000);

//172.0.0.1:3000 < nodejs http server
//172.0.0.1:3306 < mysql
//포트를 열때는 신중하게
//보안에 위협이 됌.
