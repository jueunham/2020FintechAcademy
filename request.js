const request = require("request");
var parseString = require("xml2js").parseString;

request(
    "http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109", //날씨정보 api
    function (error, response, body) {
        var xml = body;
        parseString(xml, function (err, result) {
            console.dir(result.rss.channel);
            //#work5 기상 예보 내역을 출력하기
        });
    }
);
