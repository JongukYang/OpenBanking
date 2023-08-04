var fs = require("fs");

console.log("A");

let textResult = "입력전";

fs.readFile("./test.txt", "utf8", function (err, result) {
  if (err) {
    console.error(err);
    console.log("파일 못읽었다");
    throw err;
  } else {
    textResult = result;
    // console.log("여기 C");
    console.error("두 번째 기능인데 파일을 읽어오느라 시간이...");
    // console.log(result);
  }
});

// 출력이 되지 않음. -> 비동기 방식의 진행이라서
// 파일을 열고 데이터를 textResult에 담기 전에
// log가 수행되어서 파일 데이터가 덮어씌여지지 않음 -> 현재는 입력전 출력전
console.log(textResult);

console.log("C");
