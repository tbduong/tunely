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
  var newAlbumEntry = new db.Album({
      artistName: req.body.artistName,
      name: req.body.name,
      releaseDate: req.body.releaseDate,
      genres: req.body.genres
  });
  console.log("NEW ENTRY!!!" + newAlbumEntry);
}


function show(req, res) {
  // FILL ME IN !
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
