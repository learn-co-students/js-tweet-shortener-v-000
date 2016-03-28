'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    tweet = tweet.replace(/\bhello\b/gi, 'hi');
    tweet = tweet.replace(/\bto\b/gi, '2');
    tweet = tweet.replace(/\btwo\b/gi, '2');
    tweet = tweet.replace(/\btoo\b/gi, '2');
    tweet = tweet.replace(/\bfor\b/gi, '4');
    tweet = tweet.replace(/\bbe\b/gi, 'b');
    tweet = tweet.replace(/\byou\b/gi, 'u');
    tweet = tweet.replace(/\bat\b/gi, '@');
    tweet = tweet.replace(/\band\b/gi, '&');

    return tweet;
  },

  bulkShortener: function(tweetsArray) {
    var shortened = [];
    tweetsArray.forEach(function(tweet) {
      shortened.push(this.wordSubstituter(tweet));
    }, this );
    return shortened;
  },

  selectiveShortener: function(tweet) {
    if (tweet.length > 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet) {
    if (tweet.length > 140) {
      var shortened = this.wordSubstituter(tweet)
      if (shortened.length > 140) {
        var shorter = shortened.slice(0, 137);
        return shorter + '...';
      } else {
        return shortened;
      }
    } else {
      return tweet;
    }
  }
};
