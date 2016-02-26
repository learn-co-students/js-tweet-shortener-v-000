'use strict';

var tweetShortener = {
  wordSubstituter: function(word) {
  word = word.replace(/\bhello\b/gi, "hi");
  word = word.replace(/\btwo\b|\bto\b|\btoo\b/gi, "2");
  word = word.replace(/\bfor\b|\bfour\b/gi, "4");
  word = word.replace(/\bbe\b/gi, "b");
  word = word.replace(/\byou\b/gi, "u");
  word = word.replace(/\bat\b/gi, "@");
  word = word.replace(/\band\b/gi, "&");
  return word;
},
  bulkShortener: function(string){
    return string.map(function(tweet) {
      return tweetShortener.wordSubstituter(tweet);
    });
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet; 
    }
  },
  shortenedTruncator: function(tweet) {
  if (tweet.length > 140) {
    return tweetShortener.wordSubstituter(tweet).substr(0,137) + "...";
  } else {
    return tweet;
  }
}
};


