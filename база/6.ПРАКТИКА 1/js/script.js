"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

let firstAsk = prompt('Один из последних просмотренных фильмов?', '');
let secondAsk = prompt('На сколько оцените его?', '');
let first2Ask = prompt('Один из последних просмотренных фильмов?', '');
let second2Ask = prompt('На сколько оцените его?', '');

personalMovieDB.movies = {
   [firstAsk]: secondAsk,
   [first2Ask]: second2Ask,
}

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);