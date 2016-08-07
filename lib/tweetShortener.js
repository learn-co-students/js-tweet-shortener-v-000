'use strict';

var tweetShortener = {
  wordSubstituter: function(sentence){
    var result = sentence;
    result = result.replace(/Hello/ig, "Hi");
    result = result.replace(/to\b|too|two/ig, '2');
    result = result.replace(/for|four/ig, '4');
    result = result.replace(/be\b/ig, "b");
    result = result.replace(/you\b/ig, "u");
    result = result.replace(/\b(at)/ig, "@");
    result = result.replace(/and\b/ig, "&");

    return result;
  },

  bulkShortener: function(tweets){
    var result = [];

    for (var i =  0; i < tweets.length; i++) {
      result.push(this.wordSubstituter(tweets[i]));
    };
    return result;
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return this.bulkShortener([tweet]);
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    if (tweet.length > 140) {
      var result = this.wordSubstituter(tweet);
      return result.slice(0,137)+"...";
    } else {
      return tweet;
    }
  }
};
