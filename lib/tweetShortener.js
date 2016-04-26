'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var dictionary = {
      "hello": 'hi',
      "to": '2',
      "two": '2',
      "too": '2',
      "for": '4',
      "four": '4',
      'be': 'b',
      'you': 'u',
      "at": "@",
      "and": "&",
    };
    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    return tweet.replace(regex, function(match){
      return dictionary[match.toLowerCase()];
    });
  },
  bulkShortener: function(tweets) {
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },
  selectiveShortener: function(tweet){
    if(tweet.length >= 140){
      return this.wordSubstituter(tweet);
    }else{
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    tweet = this.selectiveShortener(tweet)
    if(tweet.length >= 140){
      tweet = tweet.substring(0,137)+"...";
      return tweet;
    }else{
      return tweet;
    }
  }
};
