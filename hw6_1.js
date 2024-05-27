 let str = 'qwerty';
 let sign = '*';
 let a = true;
 let b = (str.length)+1;
 
 function pad(str, sign, a, b) {
    switch(a){
        case true :
            let str1 = (str.padStart(b,'*'));
            return str1;
        case false:
            let str2 = (str.padEnd(b,'*'));
            return str2;
    }
 }

 console.log(pad(str, sign, a, b));