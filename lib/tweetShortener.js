'use strict';

var substitutes = {
  "hello": "hi",
  "to": 2,
  "two": 2, 
  "too": 2,
  "for": 4,
  "For": 4,
  "four": 4, 
  "be": "b",
  "you": "u",
  "at": "@",
  "and": "&"
}

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetWords = tweet.split(" ");
    for ( var i = 0 ; i < tweetWords.length ; i++ ) {
      if ( Object.keys(substitutes).indexOf(tweetWords[i]) != -1 ) {
        tweetWords[i] = substitutes[tweetWords[i]];
      }
    }
    return tweetWords.join(" ");
  },
  bulkShortener: function(tweetList){
    var shortened = [];
    for ( var i = 0 ; i < tweetList.length ; i++ ) {
      shortened.push( tweetShortener.wordSubstituter(tweetList[i]) );
    }
    return shortened;
  },
  selectiveShortener: function(tweet){
    if ( tweet.length > 140 ) {
      return tweetShortener.wordSubstituter(tweet); 
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if ( tweetShortener.selectiveShortener(tweet).length > 140 ) {
      return tweetShortener.selectiveShortener(tweet).slice(0, 137) + "...";
    } else {
      return tweetShortener.selectiveShortener(tweet);
    }
  }
};