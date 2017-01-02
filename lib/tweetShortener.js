'use strict';

var subs = {
  "hello": "hi",
  "to": "2",
  "two": "2",
  "too": "2",
  "for": "4",
  "four": "4",
  "be": "b",
  "you": "u",
  "at": "@",
  "and": "&"
}

var tweetShortener = {

  wordSubstituter: function(tweet){
    for (var word in subs) {
      var regex = new RegExp(" " + word + " ", "gi")
      var subtweet = tweet.replace(regex, " " + subs[word] + " ");
      tweet = subtweet;
    }
    return tweet;
  },

  bulkShortener: function(tweetArray){
    var shortTweets = tweetArray.map(function(tweet) {
      return tweetShortener.wordSubstituter(tweet)
    });
    console.log(shortTweets);
    return shortTweets;
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    if (tweet.length > 140) {
      var shortenedTweet = tweetShortener.wordSubstituter(tweet);
      if (shortenedTweet.length > 140) {
        var truncatedTweet = shortenedTweet.slice(0, 137);
        return truncatedTweet + "...";
      } else {
        return shortenedTweet;
      }
    } else {
      return tweet;
    }
  }
};
