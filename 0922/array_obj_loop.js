var car = {
    name: "sonata",
    ph: "500ph",
    start: function () {
        console.log("engine is starting");
    },
    stop: function () {
        console.log("engine is stoped");
    },
};

var car2 = {
    name: "bmw",
    ph: "380ph",
    start: function () {
        console.log("engine is starting");
    },
    stop: function () {
        console.log("engine is stoped");
    },
};

var car3 = {
    name: "smart",
    ph: "400ph",
    start: function () {
        console.log("engine is starting");
    },
    stop: function () {
        console.log("engine is stoped");
    },
};

var cars = [car1, car2, car3];
//#work 3 자동차 배열을 순회하여 이름이 smart인 자동차를 찾으면 "find"라고 출력하고 마력(ph) 출력하기.
for (var i = 0; i < cars.length; i++) {
    if (car[i].name == "smart") {
        console.log("find");
        console.log(cars[i].ph);
    }
}
//es6
cars.map((car) => {
    if (car[i].name == "smart") {
        console.log("find");
        console.log(cars[i].ph);
    }
});

//
//?
//!
//Todo:
//*
/**
 * @description
 *
 */
