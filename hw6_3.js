function number () {
let evenCount = 0;
let oddCount = 0;
var answer = 0;

for (let i = 0; i < 21; i++) {
const randomNum = Math.floor(Math.random() * (1001 - 100)) + 100;
if (randomNum % 2 === 0) {
evenCount++;
} else {
oddCount++;
}
}
return answer = evenCount / oddCount;
}
 console.log(number());