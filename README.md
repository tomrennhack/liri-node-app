## WELCOME TO MY LIRI NODE APP !!

### App Overview

LIRI is an app run with Node that allows users to search the items listed below. At a high level, it is basically a virtual assistant (such as SIRI or Google Assistant) but it runs in Node and utilizes written language instead of spoken word.

* movie-this: enter a movie and you will receive OMDb info about that movie, including the title, release year, plot, IMDb rating, Rotten Tomatoes rating, and even the production country and languages in which the movie is offered.

* spotify-this-song: enter a song name and the app will return all the results that come up, providing you with the artist name, song name, a link to preview the song on Spotify (if available), and the album name.

* concert-this: enter a band/artist name and you will receive Bands In Town data for upcoming concerts that band will be playing, including the venue name, city and country, date (formatted using Moment) as well as the lineup to see who else is playing that show.

* do-what-it-says: this command is entered without any additional arguments, and LIRI reads the 'random.txt' file to decide what it should be looking up.

### Instructions

Required Installations for LIRI Use:

* axios -- used for OMDb and BandsInTown for movie-this and concert-this commands, respectively
* node-spotify-api -- used for Spotify for spotify-this-song command
* dotenv -- this was used to access my Spotify ID and Secret (user info)
* fs -- used to read the random.txt file for do-what-it-says command
* moment - used to format the date to MM/DD/YYYY when returning concert-this results

Sample commands for LIRI:

* node liri.js movie-this Pulp Fiction :: this will return OMBd info about the movie entered
* node liri.js spotify-this-song Enter Sandman: this will return top 20 song info from Spotify about the song entered
* node liri.js concert-this Bruce Springsteen: this will return upcoming concert details from BandsInTown about the band/artist entered
* node liri.js do-what-it-says: this will refer to the random.txt file to decide what command and value to search

### Links

LIRI Demonstration Video (sorry for the poor quality): https://youtu.be/rAXBjo_jy_I

Github Repo: https://github.com/tomrennhack/liri-node-app