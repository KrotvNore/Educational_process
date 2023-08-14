"use strict";

const obj = {
   a: 50,
   b: 10
}

console.log(obj.a);
console.log(++obj.a);

const alr = [];
alr[0] = alert("Привет!");
alr[1] = prompt("Скок тебе лет?", "");

console.log(5 + +alr[1]);


const name = prompt('Как тебя зовут?', '');
const res = confirm("Тебя зовут " + name + "?");