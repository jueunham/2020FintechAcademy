vas fs = require('fs');

console.log('첫번째 기능입니다.');
fs.readFile('0922/test.txt','utf8', function (err,result){
    if(err) {
        console.log(err);
        throw err;
    }
    else {
        console.error("두번째 기능인데 파일을 읽어오느라 시간이.. 조금 걸려요")
        console.log(result);
    }
});
console.log('마지막기능입니다.');