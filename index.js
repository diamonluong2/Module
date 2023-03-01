// import: Khai báo sử dụng các biến/hàm từ các module khác
import { PI, circleArea, MAX } from "./utils.js";
import { getProducts } from "./services.js";
import Student from "./Student.js";

console.log(PI);
console.log(MAX);
console.log("Diện tích hình tròn:", circleArea(6));

const student = new Student("0001", "Nam", "nam@gmail.com");

getProducts().then((response) => console.log(response.data));
