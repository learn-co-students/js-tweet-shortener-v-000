'use strict'; 

var tweetShortener = {
  wordSubstituter: function(tweet){
    var substitutions = {
      "hello": "hi", 
      "to": "2", 
      "two": "2", 
      "too": "2", 
      "for": "4", 
      "four": "4", 
      "be": "b", 
      "you": "u", 
      "at": "@", 
      "and": "&", 
    }; 

    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi; 
    return tweet.replace(regex, function(match){
      return substitutions[match.toLowerCase()];  
    }); 
  },

  bulkShortener: function(tweets){
    var shortenedTweets = []; 
    for (var i = 0; i < tweets.length; i++) {
      shortenedTweets.push(this.wordSubstituter(tweets[i]));  
    };  
    return shortenedTweets; 
  },

  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);  
    }
    return tweet; 
  },

  shortenedTruncator: function(tweet){
    var newTweet = this.selectiveShortener(tweet); 
    if (newTweet.length >= 140) {
      return newTweet.slice(0, 137) + "..."; 
    } 
    return newTweet;  
  }
};
