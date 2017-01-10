'use strict';

var tweetShortener = {
  wordSubstituter: function(string){

  },

  bulkShortener: function(string){
    wordSubstituter(string);
  },

  selectiveShortener: function(string){
    if (string.length >= 140) {
      wordSubstituter(string)
    } else {
      return string
    }
  },

  shortenedTruncator: function(string){
    if (string.length > 140) {
      return string.substring(0, 140)
    } else {
      return string
    }
  }
};
