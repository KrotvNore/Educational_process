"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: +numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

// const firstAsk = prompt('Один из последних просмотренных фильмов?', ''),
//       secondAsk = prompt('На сколько оцените его?', ''),
//       first2Ask = prompt('Один из последних просмотренных фильмов?', ''),
//       second2Ask = prompt('На сколько оцените его?', '');

// personalMovieDB.movies = {
//    [firstAsk]: secondAsk,
//    [first2Ask]: second2Ask
// }  ^^старая^^         внизу я упростил

for (let i = 0; i < 2; i++) { // чтобы 2 раза одно и тоже спросил
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');

   if (a != null && b != null && a != '' && b != '' && a.length < 50) { //a.length - длина строки в символах
      personalMovieDB.movies[a] = b;
      console.log('Заебись!');
      console.log(personalMovieDB.movies);
   }  else {
      console.log('error');
      i--;
   }
}

if (personalMovieDB.count < 10) {
   const a1 = confirm('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
   const a1 = confirm('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
   const a1 = confirm('Вы киноман!');
}else {
   const a1 = confirm('Ошибка!');
}

// console.log(personalMovieDB.count);
// console.log(personalMovieDB.movies);