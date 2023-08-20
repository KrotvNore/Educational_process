"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: +numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

const firstAsk = prompt('Один из последних просмотренных фильмов?', ''),
      secondAsk = prompt('На сколько оцените его?', ''),
      first2Ask = prompt('Один из последних просмотренных фильмов?', ''),
      second2Ask = prompt('На сколько оцените его?', '');

personalMovieDB.movies = {
   [firstAsk]: secondAsk,
   [first2Ask]: second2Ask
}

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
console.log(personalMovieDB);