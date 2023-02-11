'use strict'

let personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    toggleVisibleMyDB: () => {
        if(personalMovieDB.privat == true){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    start: () => {
        personalMovieDB.count = +prompt("How many films have you watched?","");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("How many films have you watched?","");
        }
    },
    rememberMyFilms: () => {
        for(let i = 0; i < 2; i++ ){
            const   a = prompt("What was the last movie you watched?", "").trim(),
                    b = +prompt("Rate the movie", "").trim();
            
            if(a !== null && b != null && a != "" && b != "" && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("Too few movies have been viewed");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("You are classic viewer");
        } else if(personalMovieDB.count >30){
            console.log("You are movie fan");
        } else {
            console.log("error");
        }
    },
    showMyDB: () => {
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        } else {
            console.log("It's private!")
        }
    },
    writeYourGenres: () => {
        for(let i = 0; i < 3 ; i++){
            personalMovieDB.genres[i] = prompt(`Your favourite genre number ${i+1}`);
            if(personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null){
                i--;
            }
        };
        personalMovieDB.genres.forEach(function(item, index){
            console.log(`Your favourite genre #${index+1} is ${item}`)
        });
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();
if(personalMovieDB.privat == true){personalMovieDB.toggleVisibleMyDB()};
personalMovieDB.showMyDB();