const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr) {
    return Math.random() -0.5 ;
}
arr.sort(myBlend);
console.log(arr);