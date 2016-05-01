'use strict';
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');

const download = function(url){
  request(url, {encoding: 'binary'}, function(error, response, body) {
    fs.writeFile(`./${argument}.jpg`, body, 'binary', function (err) {});
  });
};

module.exports = function twitterPic(argument) {
  request({
      method: 'GET',
      url: `https://twitter.com/${argument}`
  }, function(err, response, body, callback) {
    if (err) return console.error(err);
    const $ = cheerio.load(body);
    const image = $('.ProfileAvatar-image').attr('src');

    //download image
    download(image);
  });
};