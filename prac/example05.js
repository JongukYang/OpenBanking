const array = ["a", "b", "c", "d", "e", "f", "g"];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}
console.log("######################");

array.forEach((element) => {
  console.log(element);
});

console.log("######################");

array.map((element) => {
  console.log(element);
});

console.log("######################");
