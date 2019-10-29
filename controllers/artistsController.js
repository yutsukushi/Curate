var axios = require("axios");
const db = require("../models");
var cheerio = require('cheerio');

const ARTIST_FIELDS = 'Title Artist Nationality Date URL Medium ThumbnailURL';

module.exports = {
  findAll: function (req, res) {
    console.log('findAll req.query: ', req.query);
    var needle = req.query.name; // e.g. "Otto Wagner"

    db.Artist
      .find({ Artist: { '$regex': needle, $options: 'i' } }, ARTIST_FIELDS)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
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
        //console.log(response.data);
        console.log("through $ cheerio")
        let imageHref = $("div.work__image-container picture img").attr("src");
        let bigImage = "https://www.moma.org" + imageHref
        console.log("result: " + imageHref)
        console.log("big image: " + bigImage)
      }
      )
    }).catch(err => {
      console.log("error: " + err)
      return res.status(422).json(err);
    });

  }
};
