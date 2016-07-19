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
db.Album.create(req.body, function(err, album){
    if (err) { console.log('!!!!ERROR!!!!', err);}
        console.log("YAY, NEW ALBUM");
        res.json(album);
    });
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
