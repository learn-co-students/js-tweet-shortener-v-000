'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var replacement_key = {
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

    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\bat\b|\band\b/gi;

    //checks all words in 'tweet' parameter for assoc. regex. passes found words to anon. function.
    return tweet.replace(regex, function(word) {
      //swaps found regex for value in the replacement_key obj.
      return replacement_key[word.toLowerCase()];
    });
  },

  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },

  selectiveShortener: function(tweet){
    //if tweet is longer than 140, only then call wordSubstituter
    if(tweet.length > 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var sub_tweet = this.wordSubstituter(tweet)
    //if tweet is still longer than 140 after wordSub, then truncate
    if(sub_tweet.length > 140) {
      return sub_tweet.substring(0,137) + "...";
    } else {
      return tweet;
    }
  }
};
