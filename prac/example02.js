let car = {
  name: "sonata",
  hp: 1000,
  start: function () {
    console.log("engine start");
  },
  stop: function () {
    console.log("engine stop");
  },
};
console.log(car.name);
car.start();
console.log(car.start);
