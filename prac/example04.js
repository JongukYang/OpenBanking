let array = [
  "bmw",
  "sonata",
  "k5",
  {
    name: "sonata",
    hp: 1000,
    start: function () {
      console.log("engine start");
    },
    stop: function () {
      console.log("engine stop");
    },
  },
];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]); // undefined
