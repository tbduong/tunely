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
  sampleAlbums.forEach(function(event){
    renderAlbum(event);
  });

  //create new albumEntry
  $('#newAlbumForm').on('submit', function(e){
    var formData = $(this).serialize(); //creates querystring
    console.log("new entry!", formData);
    e.preventDefault();
    $.post('/api/albums', formData, function(album){
      $(this).trigger('reset');
      renderAlbum(album);
      console.log("!!!!" + album);
    });
      $('#newAlbumForm').val(''); //clears form
  });

  $.get('/api/albums', onSuccess);
  function onSuccess(json) {
    console.log(json);
    json.forEach(function(album){ //takes each json passed through (from the albums controller) and renders it through the function one by one
      renderAlbum(album);
    });
  }
});
// this function takes a single album and renders it to the page
function renderAlbum(album) {
  var html = templateFunction(album);
  $('#albums').prepend(html);
}
