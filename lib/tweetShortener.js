'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var replace = {
      hello: "hi",
      to: "2",
      two: "2",
      too: "2",
      be: "b",
      you: "u",
      at: "@",
      and: "&",
      for: "4"
      };
    var re = /\bhello\b|\bto\b|\btoo\b|\btwo\b|\bbe\b|\byou\b|\bat\b|\band\b|\bfor\b/gi;
    tweet = tweet.replace(re, function(match){ return replace[match.toLowerCase()]});
    return tweet;
  },
  bulkShortener: function(tweetArray){
    return tweetArray.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  },
  selectiveShortener: function(tweet){
    if(tweet.length > 140){
      return tweetShortener.wordSubstituter(tweet);
    }
    return tweet;
  },
  shortenedTruncator: function(tweet){
    tweet = tweetShortener.selectiveShortener(tweet);
    if(tweet.length > 140){
    var shortened = tweet.split('').slice(0,137);
    shortened.push('...');
    return shortened.join('');
    }
    return tweet;
  }
};


