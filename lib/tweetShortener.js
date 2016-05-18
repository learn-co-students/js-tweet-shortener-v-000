'use strict';

var replace = {
  hello: "hi",
  two: "2",
  to: "2",
  too: "2",
  for: "4",
  four: "4",
  be: "b",
  you: "u",
  at: "@",
  and: "&"
};

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.replace(/\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/ig, function(words){
      return replace[words.toLowerCase()];
    });
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    }
    else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length < 140) {
      return tweet;
    }
    else {
      var revisedTweet = tweetShortener.wordSubstituter(tweet);
      if (revisedTweet.length < 140) {
        return revisedTweet;
      }
      else {
        return revisedTweet.slice(0, 137) + "...";
      }
    }
  }
};
