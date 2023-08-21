"use strict";

if (4 == 9) {
   console.log('ok');
}  else {
   console.log('no');
}

const num = 50;
if (num < 49) {
   console.log('Error');
}  else if (num > 100) {
   console.log('Много');
}  else {
   console.log('ok');
}

(num === 50) ? console.log('Ok!') : console.log('Error!');


const nUm = 50;

switch (nUm) {  // switch - это строгое сравнение
   case 49:     // (равен ли 49 к 50 ?)
      console.log('Неверно!');
      break;
   case 51:
      console.log('НЕА!');
      break;
   case 50:
      console.log('Да!');
      break;
   default:      // Если ничего не подошло
      console.log('LOSER!');
      break;
}