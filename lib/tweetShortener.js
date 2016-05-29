'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var shortenedTweet = tweet;

    shortenedTweet = shortenedTweet.replace(/hello/gi, 'hi');
    shortenedTweet = shortenedTweet.replace(/( to | two | too )/gi, ' 2 ');
    shortenedTweet = shortenedTweet.replace(/( for | four )/gi, ' 4 ');
    shortenedTweet = shortenedTweet.replace(/ be /gi, ' b ');
    shortenedTweet = shortenedTweet.replace(/ you /gi, ' u ');
    shortenedTweet = shortenedTweet.replace(/ at /gi, ' @ ');
    shortenedTweet = shortenedTweet.replace(/ and /gi, ' & ');

    return shortenedTweet;
  },

  bulkShortener: function(tweets) {
    var shortenedTweets = [];

    tweets.forEach(function(tweet) {
      shortenedTweets.push(this.wordSubstituter(tweet));
    }, this);

    return shortenedTweets;
  },
  
  selectiveShortener: function(tweet) {
    if (tweet.length > 140)
      return this.wordSubstituter(tweet);
    else
      return tweet;
  },
  
  shortenedTruncator: function(tweet) {
    if (tweet.length < 140)
      return tweet;
    else 
      var shortenedTweet = this.wordSubstituter(tweet);
       
      if (shortenedTweet.length > 140) 
        return shortenedTweet.slice(0, 137) + '...';
      else
        return shortenedTweet;
  }
};

