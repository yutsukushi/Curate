var axios = require("axios");
const db = require("../models");
var cheerio = require ('cheerio');

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
      console.log("record.keys: " + Object.keys(record))
      console.log("record._id: " + record._id);
      console.log("record.URL: " + record.get("URL"));
      console.log("record.Title: " + record.get("Title"));
      
      let theUrl = record.get("URL"); // Artist: URL
      console.log("the URL: " + theUrl);

      res.json(record);
      axios.get(theUrl).then(function (response) {
        console.log("through .get")
        var $ = cheerio.load(response.data);
        console.log("through $ cheerio")
        var results = [];
        console.log("through results array")
        $("div.work_image-container").each(function (i, element) {
          console.log("through div.work_image")
          var result = {};
          console.log("through result {}")
          result.image = $(this).find("picture.picture img").attr("src");
          console.log("through result.image")
          results.push(result);
          console.log("results: " + results);
          console.log("result: " + result)
        });
        var promises = []
        console.log("through promises array")
        for (var i = 0; i < results.length; i++) {
          console.log("through loop")
          var result = results[i];
          console.log("through result = results[i]")
          var bigImages = db.Artists.updateOne({ Image: result.image }, result, { upsert: true });
          promises.push(bigImages);
          console.log("promises: " + promises)
          console.log(" big image: " + bigImages)
        }
      })
    }).catch(err => {
      console.log("error: " + err)
      return res.status(422).json(err);
    });

  }
};
