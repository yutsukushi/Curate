  'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var Article = require('../../models/note');

    router.get('/', function(req, res) {
        res.status(200).send('<a href=\'/api/articles/\'>articles</a><br><a href=\'/api/notes/\'>notes</a>');
    });

router.use('/articles', require('./articles'));
router.use('/notes', require('./notes'));

module.exports = router;