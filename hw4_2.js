"use strict"

var prompt = Number( require('prompt'));
prompt.start();
prompt.get(['age'], function (err, result) {
     console.log('Command-line input received:');
     console.log('Age' + result.age);
  if (isNaN(result.age) === true ||
    result.age === null ||
    result.age === ' ' || 
    result.age === NaN || 
    result.age === undefined ||
    result.age === 0n){
      console.log('Введіть ціле число')
} else if (result.age >= 2 ||
      result.age >= 4 ||
      result.age >= 22 ||
      result.age >= 24 ||
      result.age >= 32 || 
      result.age >= 34 ||
      result.age >= 42 || 
      result.age >= 44 ||
      result.age >= 52 ||
      result.age >= 54 ||
      result.age >= 62 ||
      result.age >= 64 || 
      result.age >= 72 || 
      result.age >= 74 ||
      result.age >= 82 || 
      result.age >= 84 || 
      result.age >= 92 || 
      result.age >= 94 || 
      result.age >= 102 ||
      result.age >= 104 ){
      console.log(result.age +' роки')
} else if (result.age === 1 ||
    result.age === 21 ||
    result.age === 31 || 
    result.age === 41 ||
    result.age === 51 ||
    result.age === 61 || 
    result.age === 71 || 
    result.age === 81 || 
    result.age === 91 || 
    result.age === 101 || 
    result.age === 111){
      console.log(result.age +' рік')
} else if (result.age >= 115) {
      console.log(result.age +' так довго не живуть,Ви безсмертний!')
} else if ( result.age >=11 &&
      console.log(result.age +' років')
} else {
      console.log(result.age +' років')
}

});

