'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var subs = {
      'hello': 'hi',
      'to': '2',
      'two': '2',
      'too': '2',
      'for': '4',
      'four': '4',
      'be': 'b',
      'you': 'u',
      'at': '@',
      'and': '&'
  };
  var key;
  for(key in subs){
    var gsub = "\\b" + key + "\\b";
    var reg = new RegExp(gsub, "gi");
    tweet = tweet.replace(reg, subs[key]);
  };
  return tweet;
  },

  bulkShortener: function(tweets){
    var results = [];
    tweets.forEach(function(tweet){
      results.push(tweetShortener.wordSubstituter(tweet));
    })
    return results;
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return tweetShortener.wordSubstituter(tweet);
    }else{
      return tweet;
    };
  },

  shortenedTruncator: function(tweet){
    tweet = tweetShortener.selectiveShortener(tweet);
    if (tweet.length > 140){
      tweet = tweet.slice(0, 137) + "...";
    }
    return tweet;
  }
};
