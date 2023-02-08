'use strict'
let numberOfFilms = +prompt("How many films have you watched?","");

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

// const   a = prompt("What was the last movie you watched?",""),
//         b = +prompt("Rate the movie", 0);
//         c = prompt("What was the last movie you watched?",""),
//         d = +prompt("Rate the movie", 0);


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// for(let i = 0; i < 2; i++ ){
//     const   a = prompt("What was the last movie you watched?", ""),
//             b = +prompt("Rate the movie", "");
    
//     if(a !== null && b != null && a != "" && b != "" && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// }

if (personalMovieDB.count < 10) {
    console.log("Too few movies have been viewed");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("You are classic viewer");
} else if(personalMovieDB.count >30){
    console.log("You are movie fan");
} else {
    console.log("error");
}
let counter = 0;
do {
    const   a = prompt("What was the last movie you watched?", ""),
    b = +prompt("Rate the movie", "");

    if(a !== null && b != null && a != "" && b != "" && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log("done");
    counter++;
    } else {
    console.log("error");
    counter--;
    }
    
} while (counter < 2);
