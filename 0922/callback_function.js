var fs = require("fs");

function callReadFile(callback) {
    fs.readFile("test.txt", "utf8", function (err, result) {
        if (err) {
            console.error(err);
            throw err;
        } else {
            callback(result);
        }
    });
}

console.log("first func");
console.error("두번째 기능, 파일을 읽어오느라 오래걸림");
callReadFile(function (data) {
    console.log(data);
    console.log("third func");
});
