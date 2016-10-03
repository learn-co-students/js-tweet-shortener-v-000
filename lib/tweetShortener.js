'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var array = tweet.split(" ");
    array.forEach(function(word, index){
      if (word === "at") {
        array[index] = "@";
      } else if (word === "to" || word === "too" || word === "two") {
        array[index] = "2";
      } else if (word === "be") {
        array[index] = "b";
      } else if (word === "you") {
        array[index] = "u";
      } else if (word === "and") {
        array[index] = "&";
      } else if (word === "for" || word === "four" || word === "For") {
        array[index] = "4";
      }
    })
    return array.join(" ");
  },
  bulkShortener: function(arrayOfTweets){
    return arrayOfTweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweet.slice(0,137) + "...";
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140) {
      tweet = tweetShortener.wordSubstituter(tweet)
    }
    if (tweet.length > 140) {
      tweet = tweetShortener.selectiveShortener(tweet)
    }
    return tweet;
  }
};
