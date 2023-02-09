'use strict'
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you watched?","");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("How many films have you watched?","");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


function rememberMyFilms(){
    for(let i = 0; i < 2; i++ ){
        const   a = prompt("What was the last movie you watched?", ""),
                b = +prompt("Rate the movie", "");
        
        if(a !== null && b != null && a != "" && b != "" && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Too few movies have been viewed");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("You are classic viewer");
    } else if(personalMovieDB.count >30){
        console.log("You are movie fan");
    } else {
        console.log("error");
    }
}

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    } else {
        console.log("It's private!")
    }
}

detectPersonalLevel();


function writeYourGenres(){
    for(let i = 0; i < 3 ; i++){
        personalMovieDB.genres[i] = prompt(`Your favourite genre number ${i+1}`);
        if(personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null){
            i--;
        }
    }
}

writeYourGenres();
showMyDB();