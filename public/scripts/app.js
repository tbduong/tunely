/* CLIENT-SIDE JS
*
* You may edit this file as you see fit.  Try to separate different components
* into functions and objects as needed.
*
*/
var templateFunction; //compiling of html that we pull
var $albumsList;
var sampleAlbums = [];

/* hard-coded data! */
sampleAlbums.push({
  artistName: 'Ladyhawke',
  name: 'Ladyhawke',
  releaseDate: '2008, November 18',
  genres: [ 'new wave', 'indie rock', 'synth pop' ]
});
sampleAlbums.push({
  artistName: 'The Knife',
  name: 'Silent Shout',
  releaseDate: '2006, February 17',
  genres: [ 'synth pop', 'electronica', 'experimental' ]
});
sampleAlbums.push({
  artistName: 'Juno Reactor',
  name: 'Shango',
  releaseDate: '2000, October 9',
  genres: [ 'electronic', 'goa trance', 'tribal house' ]
});
sampleAlbums.push({
  artistName: 'Philip Wesley',
  name: 'Dark Night of the Soul',
  releaseDate: '2008, September 12',
  genres: [ 'piano' ]
});
/* end of hard-coded data */

$(document).ready(function() {
  console.log('app.js loaded!');
  var albumHtml = $('#album-template').html();
  // console.log(albumHtml);
  templateFunction = Handlebars.compile(albumHtml);
  sampleAlbums.forEach(function(e){
    renderAlbum(e);
  });
});


// this function takes a single album and renders it to the page
function renderAlbum(album) {
  var html = templateFunction(album);
  $('#albums').prepend(html);
}
