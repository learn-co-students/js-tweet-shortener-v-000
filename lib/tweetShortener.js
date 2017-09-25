'use strict';
var tweetShortener = {
  wordSubstituter: function(tweet){
    var subs = {
      "hello": "hi", 
      "to": "2", 
      "two": "2", 
      "too": "2", 
      "for": "4", 
      "four": "4", 
      "be": "b",
      "you": "u",
      "at": "@",
      "and": "&"
    };
    var words = tweet.split(' ');
    for (var i = 0; i < words.length; i++) {
      if (words[i].toLowerCase() in subs) {
        words[i] = subs[words[i].toLowerCase()];
      }
    }
    return words.join(' ');
  },
  bulkShortener: function( tweets ){
    var bucket = [];
    for (var i = 0; i < tweets.length; i++) {
      bucket.push( this.wordSubstituter( tweets[i] ) )
    }
    return bucket
  },
   selectiveShortener: function( tweet ){
     if (tweet.length > 140) {
       var shortenedTweet = this.wordSubstituter( tweet );
       return shortenedTweet.slice(0,137) + '...';
     } else {
       return tweet;
     }
   },
 
   shortenedTruncator: function( tweet ){
     var shortenedTweet = this.wordSubstituter( tweet );
     if (tweet.length > 140) {
       return shortenedTweet.slice(0,137) + '...';
     } else {
       return tweet;
     }
   }
};