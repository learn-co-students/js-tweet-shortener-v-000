'use strict';

var tweetShortener = {
  wordSubstituter: function(tweets){
    var words = {
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
     }

     var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;

     return tweets.replace(regex, function(match){
       return words[match.toLowerCase()];
     });
  },

  bulkShortener: function(tweets){
    var new_tweets = [];
    for (var i = 0; i < tweets.length; i++){
      new_tweets.push(tweetShortener.wordSubstituter(tweets[i]))
    }
    return new_tweets;
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return this.wordSubstituter(tweet);
    }
    else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140){
      var too_long = tweetShortener.selectiveShortener(tweet);
      return too_long.substr(0, 137) + "...";
    }
    else {
      return tweet;
    }
  }
};
