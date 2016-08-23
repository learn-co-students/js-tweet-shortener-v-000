'use strict';

var substitutes = {"hello": "hi", "to": "2", "two": "2", "too": "2", "be": "b", "you": "u", "at": "@", "and": "&", "for": "4", "For": "4"};
var tweetShortener = {

  wordSubstituter: function(word){

    var rWord = word;
    for (var key in substitutes) {

      var re = new RegExp('\\b' + key + '\\b', "gm");
      rWord = rWord.replace(re, substitutes[key]);
    }
    return rWord;
  },
  bulkShortener: function(sentArray){
    var a = [];
    for (var sent in sentArray) {
      a.push(tweetShortener.wordSubstituter(sentArray[sent]));
    }
    return a;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 144) {
      return tweetShortener.wordSubstituter(tweet).slice(0,137) + "...";
    } else {
      return tweet;
    }
  }
};
