// 'use strict';
var tweetShortener = {
  wordSubstituter: function(tweet){
     var words = {
       "hello": "hi",
       "to": "2",
       "two": "2",
       "too": "2",
       "for": "4",
       "for": "4",
       "For": "4",
       "four": "4",
       "be": "b",
       "you": "u",
       "at": "@",
       "and": "&"
     };
     for (var key in words) {
       tweet = tweet.split(" "+ key + " ").join(" " + words[key] + " ");
     }
     return tweet;
  },
  bulkShortener: function(tweets){
    for (var i = 0; i < tweets.length; i++) {
      tweets[i] = this.wordSubstituter(tweets[i]);
    }
    return tweets;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return this.wordSubstituter(tweet);
    }
    else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (this.selectiveShortener(tweet).length > 140) {
      return this.selectiveShortener(tweet).slice(0,137) + "...";
    }
    else {
      return tweet;
    }
  }
};
