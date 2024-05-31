function number (count) {
let evenCount = 0;
let oddCount = 0;
var answer = 0;
for (let i = 0; i < count; i++) {
const randomNum = Math.floor(Math.random() * (1001 - 100)) + 100;
if (randomNum % 2 === 0) {
evenCount++;
} else {
oddCount++;
}
}
return answer = evenCount / oddCount;
}
 console.log(number(31));
