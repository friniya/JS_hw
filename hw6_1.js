 let str = 'qwerty';
let sign = '*';
let a = true;
let b = (str.length) + 1;

function pad(str, sign, a, b) {
    switch (a) {
        case true:
            return sign.repeat(b - str.length)+str;
        case false:
            return str + sign.repeat(b - str.length);
    }
}

console.log(pad(str, sign, a, b));
