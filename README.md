# WELCOME TO MY LIRI NODE APP !!

## App Overview

LIRI is an app run with Node that allows users to search the items listed below. At a high level, it is basically a virtual assistant (such as SIRI or Google Assistant) but it runs in Node and utilizes written language instead of spoken word.

  * movie-this: enter a movie and you will receive OMDb info about that movie, including the title, release year, plot, IMDb rating, Rotten Tomatoes rating, and even the production country and languages in which the movie is offered.

  * spotify-this-song: enter a song name and the app will return all the results that come up, providing you with the artist name, song name, a link to preview the song on Spotify (if available), and the album name.

  * concert-this: enter a band/artist name and you will receive Bands In Town data for upcoming concerts that band will be playing, including the venue name, city and country, date (formatted using Moment) as well as the lineup to see who else is playing that show.

  * do-what-it-says: this command is entered without any additional arguments, and LIRI reads the 'random.txt' file to decide what it should be looking up.

## Instructions

Required Installations

  * You will need to install the following packages for LIRI to work:
    1. axios -- used for OMDb and BandsInTown for movie-this and concert-this commands, respectively
    2. node-spotify-api -- used for Spotify for spotify-this-song command
    3. dotenv -- this was used to access my Spotify ID and Secret (user info)
    4. fs -- used to read the random.txt file for do-what-it-says command
    5. moment - used to format the date to MM/DD/YYYY when returning concert-this results

How to use LIRI

  * LIRI is run using console line commands and Node, here are some examples of what you can enter to run LIRI:
    1. node liri.js movie-this Pulp Fiction
          -- this will return OMBd info about the movie entered
    2. node liri.js spotify-this-song Enter Sandman
          -- this will return top 20 song info from Spotify about the song entered
    3. node liri.js concert-this Bruce Springsteen
          -- this will return upcoming concert details from BandsInTown about the band/artist entered
    4. node liri.js do-what-it-says
          -- this will refer to the random.txt file to decide what command and value to search

## Links

A video of LIRI in action can be found here:


The github repository can be found here:


### Still left to do
  * default movie: Mr. Nobody
  * default song: The Sign by Ace of Bass
  * make video of me using the app
  * update README
  * add to my portfolio and include link on boot camp spot hw submit