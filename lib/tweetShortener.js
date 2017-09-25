'use strict';

var tweetShortener = {
  wordSubstituter: function(tweetString){
    return tweetString.replace(/\bhello\b/gi, "hi").replace(/\bto\b|\btwo\b|\btoo\b/gi, "2").replace(/\bfor\b|\bfour\b/gi, "4").replace(/\bbe\b/gi, "b").replace(/\byou\b/gi, "u").replace(/\bat\b/gi, "@").replace(/\band\b/gi, "&");
  },

  bulkShortener: function(tweetArray){
    var myArr = [];
    for (var i = 0; i < tweetArray.length; i++) {
      myArr.push(tweetShortener.wordSubstituter(tweetArray[i]));
    }
    return myArr;
  },

  selectiveShortener: function(tweetString){
    if (tweetString.length > 140) {
      return tweetShortener.wordSubstituter(tweetString);
    } 
    return tweetString;
  },

  shortenedTruncator: function(tweetString){
    var newString = tweetShortener.selectiveShortener(tweetString);
    if (newString.length > 140) {
      return newString.slice(0, 137) + "...";
    } 
    return newString;
  }
};


