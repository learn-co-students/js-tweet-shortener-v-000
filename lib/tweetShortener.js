'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var newTweet = tweet.split(" ");
  return  newTweet.map(function(word) {
      switch (word) {
        case "hello":
          return 'hi'
          break;
        case ( "to" || "two") :
          return '2'
          break;
        case  "too" :
          return '2'
          break;
        case ("For" || "four"):
          return '4'
          break;
        case "for" :
          return '4'
          break;
        case 'be':
          return 'b'
          break;
        case 'you':
         return 'u';
         break;
        case "at" :
          return "@";
          break;
        case "and":
         return "&";
         break;
        default:
          return word;
      }
    }).join(" ")
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return tweetShortener.wordSubstituter(tweet);
    })
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweetShortener.wordSubstituter(tweet).length >140) {
      return tweetShortener.wordSubstituter(tweet).slice(0,137) + "..."
    } else {
      return tweetShortener.selectiveShortener(tweet);
    }
  }
};
