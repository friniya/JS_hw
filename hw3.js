'number' + 3 + 3 // ответ: number33. Тк он не может привести 'number', к числу, то он делает склейку принимая 3 и 3 как текст.

null + 3 // ответ: 3 . JS всегда хочет привести к числу, а null это 0. Тоесть 0+3=3

5 && "qwerty"// ответ: qwerty . Решение: 5-есть число, значит true, и qwerty -есть значение значит true, но оно выводит последнее значение true, а значит qwerty.

+'40' + +'2' + "hillel"; // Ответ: 42hillel . +'40' изменит на 40, + '2' изменит на число 2. затем 40+2=42. И идет склеивание числа 42 со стрингой. 

'10' - 5 === 6; // ответ: false. 10 переводят в число. 10-5=5 и 5 не равно 6. Так как єто сравнение, будет false

true + false // ответ: 1 . Тк JS переводит их в числа. true-это 1, а false- это 0. То 1+0=1

'4px' - 3 // Ответ: NaN. Тк '4px' это не число а текст, а если мы пытаемся сделать умножение с не числом, то получим Nan

'4' - 3 // ответ: 1. Так как у нас стринг минус число, то стринг приводят в число. То есть мы получаем: 4-3=1

'6' + 3 ** 0; // ответ: 61. 3 в 0 степени= 1, 6-воспринимают как срингу и к ней клеят 1. + рассматривается как конкатенация.

12 / '6' // ответ: 2. Стринг '6' переведут в число, тк 12 число. 12/6 =2

'10' + (5 === 6);// ответ: 10false. 5 не равно 6, получаем false. 10 есть стринг(тк false это не чсило) по этому false не переводится в число. 10 стринг клеится к false

null == '' // ответ: false , тк null -есть false и ''пустая строка есть false.

3 ** (9 / 3); // ответ: 27. Сперва скобки 9/3=3 и 3 в 3 степени=27

!!'false' == !!'true' // ответ: 1. Решение: 'false'и 'true' у нас изначально как стринга = true. Далее получается следующее: !!true == !!true , преобразовіваем убирая !. Получаем true == true,  а это 1 == 1.

0 || '0' && 1 // ответ: 1. Решение: 0 это false, '0' это тоже false и 1 есть true. оно выводит последнее значение true, ф у нас оно одно, значит 1.S

(+null == false) < 1; //ответ: false. +null переводится в число 0. 0 равен false, тк он тоже 0. Итак, мы имеем true. Так как дальше число, true переводится в число 1.Получаем выражение 1<1 это не правда.

false && true || true // ответ:true. Первым мы сравниваем false && true = false, затем false || true = true, тк в или берется true если оно есть.

false && (false || true); // ответ: false. Сперва делается сравнение в скобках, там будет true тк там или.Потом идет false && true, что будет равно false по правилам.

(+null == false) < 1 ** 5; // ответ: false. +null переводится в число 0. 0 равен false, тк он тоже 0. Итак, мы имеем true. Так как дальше число, true переводится в число 1. 1 в 5 степени=1. и получаем выражение 1<1 это не правда.