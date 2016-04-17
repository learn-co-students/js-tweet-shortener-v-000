'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var temeram = tweet.split(" ").map(function(word) {
      return singleSub(word);
    });
    return temeram.join(" ")
},
  bulkShortener: function(tweets){
    var newT = tweets.map(function(tweet) {
      return tweetShortener.wordSubstituter(tweet);
    })
    return newT
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var s = tweetShortener.selectiveShortener(tweet);
    if (s.length > 140) {
      var s = s.substr(0, 137) + "...";
    }
    return s
  }
};

function singleSub(word) {
  var downcased = word.toLowerCase();
  switch (downcased) {
    case "hello":
      return "hi";
      break;
    case "two":
    case "too":
    case "to":
      return '2';
      break;
    case "for":
    case "four":
      return '4';
      break;
    case "be":
      return "b";
      break;
    case "you":
      return 'u';
      break;
    case "at":
      return '@';
      break;
    case "and":
      return "&"
      break;
    default:
      return word;
  }
}
