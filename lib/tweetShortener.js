'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.replace(/hello/ig, "hi")
       .replace(/\bto\b|\btwo\b|\btoo\b/ig, "2")
       .replace(/\bfor\b|\bfour\b/ig, "4")
       .replace(/\bbe\b/ig, "b")
       .replace(/\byou\b/ig, "u")
       .replace(/\bat\b/ig, "@")
       .replace(/\band\b/ig, "&");
   },

   bulkShortener: function(tweets){
     var arr = []
     for (var i=0; i < tweets.length; i++){
       arr.push(this.wordSubstituter(tweets[i]));
     }
     return arr;
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return this.wordSubstituter(tweet);
    }else {
      return tweet
    }
  },

  shortenedTruncator: function(tweet){
    if (this.selectiveShortener(tweet).length > 140){
  
        return this.selectiveShortener(tweet).slice(0, 137) + "...";
    }else {
      return this.selectiveShortener(tweet);
      }
    }
  };
