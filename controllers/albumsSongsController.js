/************
 * DATABASE *
 ************/
db = require('../models');

//find where we want our information to go FIND ALBUM ID--- /api/albums/:album_id
//THEN WE HAVE TO FIND THE SONG NAME AND TRACK NUMBER WE WANT TO CREATE-- FROM FORM INPUT
//

function create(req, res){
  //find Album
  db.Album.findById(req.params.album_id, function(err, foundAlbum){
      if (err) {console.log("!! ERROR !! Could NOT find album");}
      console.log(req.body);
  //create song
      var newSong = new db.Song(req.body);
    //push the new song data into the songs key value of foundAlbum.
      foundAlbum.songs.push(newSong);
      //now we have to save the new song data by saving these changes to that album
      foundAlbum.save(function(err, savedAlbum){
        if (err) {console.log("ERROR! DID NOT SAVE NEW SONG DATA INTO ALBUM");}
          console.log("NEW SONG CREATED:" + newSong);
          res.json(newSong);
      });

});
}


module.exports = {
  create: create,
};
