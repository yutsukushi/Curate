var axios = require("axios");
const db = require("../models");

const ARTIST_FIELDS = 'Title Artist Nationality Date URL Medium ThumbnailURL';

module.exports = {
  findAll: function(req, res) {
    console.log('findAll req.query: ', req.query);
    var needle = req.query.name; // e.g. "Otto Wagner"

    db.Artist
      .find({ Artist: {'$regex': needle,$options:'i'} }, ARTIST_FIELDS)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Artist
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getBigImg: function (req, res) {
    let promisedRecord = db.Artist.findById(req.params.artists);
    promisedRecord.then(function (record) {
      console.log("record: " + JSON.stringify(record));
      console.log("record._id: " + record._id);
      console.log("record.URL: " + record.URL);
      console.log("record.Title: " + record.Title);
      
      let theUrl = record.URL; // Artist: URL
      console.log("the URL: " + theUrl);

      res.json(record);
      axios.get(theUrl).then(function (response) {
        var $ = cheerio.load(response.data);
        var results = [];
        $("div.work_image-container").each(function (i, element) {
          var result = {};
          result.image = $(this).find("picture.picture img").attr("src");
          results.push(result)
        });
        var promises = []
        for (var i = 0; i < results.length; i++) {
          var result = results[i];
          var bigImages = db.Artists.updateOne({ Image: result.image }, result, { upsert: true });
          promises.push(bigImages);
        }
      })
    }).catch(err => {
      console.log("error: " + err)
      return res.status(422).json(err);
    });

  }
};
