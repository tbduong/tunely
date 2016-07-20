/************
 * DATABASE *
 ************/
db = require('../models');
/* hard-coded data */
var albums = [];

// GET /api/albums
function index(req, res) {
  db.Album.find(function (err, allAlbums){
        res.json(allAlbums);     //
  });
}

function create(req, res) {
//   var genres = req.body.genres.split(',').map(function(item) { return item.trim(); } );
// req.body.genres = genres; SOLUTIONS BRANCH maybe.
  var cleanGenres = req.body.genres.split(',');
      cleanGenres = cleanGenres.map(function (word) {
    return word.trim();
  });

  var newAlbum = req.body;
  newAlbum.genres = cleanGenres;
  db.Album.create(newAlbum, function(err, album){
    if (err) { console.log('!!!!ERROR!!!!', err);}
      console.log("YAY, NEW ALBUM", album);
      res.json(album);
  });
}

function show(req, res) {
  var albumId = req.params.album_id;
  db.Album.findById(albumId, function(err, foundAlbum){
      if (err) {console.log("!! ERROR !! Could NOT find album");}
      console.log("!! FOUND album:" + foundAlbum);
      res.json(foundAlbum); //returns json 
  });
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
