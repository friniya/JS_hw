const regex = /[^Aa][^\W_]{6,}/gm;
const str = 'Marina';
const result = regex.test(str);
console.log(result);