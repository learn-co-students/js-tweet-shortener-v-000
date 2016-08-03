'use strict';


var tweetShortener = {
  wordSubstituter: function(tweet){
    var replacements = {
      "hello": "hi",
      "to": '2',
      "two": '2',
      "too": '2',
      "for": '4',
      "four": '4',
      "4": '4',
      "be": 'b',
      "you": 'u',
      "at": '@',
      "and": '&',
    };

    return tweet.replace(/\bhello\b|\bto\b|\btoo\b|\btwo\b|\b4\b|\bfour\b|\bfor\b|\bbe\b|\byou\b|\bat\b|\band\b/gi, function(match){
      return replacements[match.toLowerCase()];
    })
  },

  bulkShortener: function(tweets){
    return $.map(tweets, function(tweet, index){
      return tweetShortener.wordSubstituter(tweet);
    });
  },

  selectiveShortener: function(tweet){
    if (tweet.length >= 140){
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    var shortenedTweet = tweetShortener.selectiveShortener(tweet);

    if (shortenedTweet.length >= 140){
      return (shortenedTweet.slice(0,137) + "...");
    } else {
      return shortenedTweet;
    }
  }
};
