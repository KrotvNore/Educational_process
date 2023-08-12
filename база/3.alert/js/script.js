// alert('MASLO');

// const result = confirm("Ты тут?");
// console.log(result); //тру или фолс

// const answer = prompt("Сколькол вам лет?", "18");
// console.log(answer);
// console.log(typeof(answer)); // тут всегда стринг(вся инфа от пользователей стринг)

// const answer = +prompt("Сколькол вам лет?", "18"); // перед промт поставил + - если цифра то благодаря + тип будет намбер
// console.log(answer);
// console.log(typeof(answer));
// console.log(answer+15);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Сколько вам лет?', '');
answers[2] = prompt('У вас есть фимоз?', '');

document.write(answers);