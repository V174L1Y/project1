let numberOfFilms = +prompt("How many films have you watched?","");

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const   a = prompt("What was the last movie you watched?",""),
        b = +prompt("Rate the movie", 0);
        c = prompt("What was the last movie you watched?",""),
        d = +prompt("Rate the movie", 0);


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

