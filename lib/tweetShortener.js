"use strict";

var WORDS = {
  "hello": "hi",
  "too": "2",
  "to": "2",
  "two": "2",
  "for":"4",
  "four": "4",
  "be ": "b ",
  " you ": " u ",
  " at": " @",
  " and": " &"
}

var tweetShortener = {
  wordSubstituter: function(tweet){
    var re = new RegExp(Object.keys(WORDS).join("|"),"gi");

    return tweet.replace(re, function(matched){
      return WORDS[matched.toLowerCase()];
    });
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    })
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if(tweetShortener.wordSubstituter(tweet).length > 140) {
      return tweetShortener.wordSubstituter(tweet).slice(0,137) + "...";
    } else {
      return tweetShortener.selectiveShortener(tweet);
    }
  }
}
