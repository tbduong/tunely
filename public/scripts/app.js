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

$.get('api/albums', onSuccess);

function onSuccess(json) {
  console.log(json);
    json.forEach(function(album){ //takes each json passed through (from the albums controller) and renders it through the function one by one
        renderAlbum(album);
    });
}

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  var html = templateFunction(album);
  $('#albums').prepend(html);
}
