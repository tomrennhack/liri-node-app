
// require the packages
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');

// concert this
var getMeConcerts = function (bandName) {
    axios
    .get("https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=trilogy")
    .then(function(response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log('--------------'); //  break visually
            console.log("Venue: " + response.data[i].venue.name); // venue name
            console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country); // venue location
            var formattedDate = moment(response.data[i].datetime).format("MM/DD/YYYY"); //  use moment to format dates
            console.log("Date: " + formattedDate); // date
            console.log("Lineup: " + response.data[i].lineup); // lineup
        }
    })
    .catch(function(error) {
        if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        console.log(error.request);
        } else {
        console.log("Error", error.message);
        }
        console.log(error.config);
    });
}

// spotify-this-song
var getArtistNames = function(artist) {
    return artist.name; // set variable for artist name
}

var getMeSpotify = function(songName) {

    var spotify = new Spotify({
    id: keys.spotify.id, // user id
    secret: keys.spotify.secret //  user secret
    });
    
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }

        var songs = data.tracks.items;

        for (var i = 0; i < songs.length; i++) {
            console.log(i + 1); // count
            console.log('Artist(s): ' + songs[i].artists.map(getArtistNames)); // artist name
            console.log('Song Name: ' + songs[i].name); // song name
            console.log('Preview Song: ' + songs[i].preview_url); // preview url
            console.log('Album: ' + songs[i].album.name); // album name
            console.log('-----------------------------');
        }
    });
}

// movie-this
var getMeMovies = function(movieName) {
    axios
    .get("http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy")
    .then(function(response) {
        console.log('-----------------------------');
        console.log('Title: ' + response.data.Title); // movie title
        console.log('Release Year: ' + response.data.Year); //  release year
        console.log('IMDB rating: ' + response.data.imdbRating); // imdb rating
        console.log('Rotten Tomatoes rating: ' + response.data.Ratings[1].Value); //  rotten tomatoes rating
        console.log('Production Country: ' + response.data.Country); // production country
        console.log('Language: ' + response.data.Language); // language
        console.log('Plot: ' + response.data.Plot); // plot
        console.log('Actors: ' + response.data.Actors); // actors
    })
    .catch(function(error) {
        if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        console.log(error.request);
        } else {
        console.log("Error", error.message);
        }
        console.log(error.config);
    });
}

var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) throw err;

        var dataSplit = data.split(',');

        if (dataSplit.length == 2) {
            pick(dataSplit[0], dataSplit[1]);
        } else if (dataSplit.length == 1) {
            pick(dataSplit[0]);
        }
    })
}

var pick = function (caseData, functionData) {
    switch (caseData) {
        case 'concert-this':
            getMeConcerts(functionData);
            break;
        case 'spotify-this-song':
            getMeSpotify(functionData);
            break;
        case 'movie-this':
            getMeMovies(functionData);
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
        default:
            console.log("LIRI can't do that");
    }
}


var runThis = function (argOne, argTwo) {
    pick (argOne, argTwo);
};

runThis(process.argv[2], process.argv.slice(3).join(' '));