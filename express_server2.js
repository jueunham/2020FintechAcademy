const express = require("express");
const app = express();
const path = require("path");
const request = require("request");

app.set("views", __dirname + "/views"); // ejs를 사용하기 위한 디렉토리 설정
app.set("view engine", "ejs"); // ejs를 사용하기 위한 뷰 엔진 설정

app.use(express.json()); // JSON타입의 데이터를 받기위한 설정
app.use(express.urlencoded({ extended: false })); // urlencoded 타입의 데이터를 받기위한 설정

app.use(express.static(path.join(__dirname, "public"))); //to use static asset 디자인 파일 위치를 정의

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/signup", function (req, res) {
    res.render("signup");
});
app.get("/authResult", function (req, res) {
    var authCode = req.query.code;
    console.log(authCode);
    var option = {
        method: "POST",
        url: " https:/testapi.openbanking.or.kr/oauth/2.0/token",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        //form 형태는 form / 쿼리스트링 형태는 qs / json 형태는 json ***
        form: {
            code: authCode,
            client_id: "sBvfEjmszsSOJWbBm6lQ9jUsLjfllPHVH9AAtJTx",
            client_secret: "26vp9jYkbGEQR6CLcErco4vSK4G9Op1BzxwMZdYN",
            redirect_uri: "http://localhost:3000/authResult",
            grant_type: "authorization_code",
            //#자기 키로 시크릿 변경
        },
    };
    request("", function (error, response, body) {
        console.log(body);
        var accessRequestResult = JSON.parse(body);
        console.log(accessRequestResult);
        res.render("resultChild", { data: accessRequestResult });
    });
});

app.listen(3000);
