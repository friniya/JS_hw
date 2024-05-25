function pow (a, b) {
    let res = a;
    for (let i = 1; i < b; i++) {
        res *=a
    }
    return res;
}
var a = 4;
var b = 3;
var res = pow(a, b);

pow();
console.log(res);
