"use strict";

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +"5"); // +"5" - плюс чтобы сделать пятерку не стринг, а намбер

let  incr = 10,    //инкремент
     decr = 10;    //декремент
// incr++;      // 11 // постфексная
// decr--;      // 9
// ++incr;      // 11 //префексная
// --decr;      // 9
// console.log(incr++);  //10
// console.log(decr--);  //10
console.log(++incr);     //11
console.log(--decr);     //9

console.log(5%2);    //остаток

console.log(4*3 == 12);    //true
console.log(4*3 == '12');  //true
console.log(4*3 == 11);    //false
console.log(4*3 === '12'); //false // === - строгая проверка, без ковычек или если поставить +'12' то будет true

// && - и   (только когда всё true)
// || - или (только когда хотя бы один true)

const isChecked = true,
      isClose   = true;
console.log(isChecked && isClose); // true потому что оба true, если бы один был false то и было бы false в консоли

const isCheck = true,
      isClos  = false; // ТУТ ЕСЛИ ЧТО FALSE 
console.log(isCheck || isClos); // true потому что один из них true, если бы все были false то и было бы false в консоли

// ! - знак отрицания, если false то true и т.д.
const isChec = true,
      isClo  = false; // ТУТ ЕСЛИ ЧТО FALSE 
console.log(!isChec || isClo); //false - потому что оба false 

console.log(2 + 2 * 2 != 8);  //true из-за знака ! (знак отрицания :36 строка)