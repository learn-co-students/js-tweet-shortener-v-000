'use strict';
  
var tweetShortener = {
  wordSubstituter: function(tweet){
    var substitution = {
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

    var word = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    return tweet.replace(word, function(words){
      return substitution[words.toLowerCase()]
    });
  },



  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  },


  // selectiveShortener: function(tweet){
  //   tweetn.length > 140 ? return tweetShortener.wordSubstituter(tweet) : return tweet;
  // }
    selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } 
    else 
    {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    var shorter = tweetShortener.selectiveShortener(tweet);
    if (shorter.length > 140) 
    {
      return shorter.slice(0,137) + "...";
    } 
    else
    {
      return tweet;
    }
  }
};