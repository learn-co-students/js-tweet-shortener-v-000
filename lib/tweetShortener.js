'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var mapObj = {
      hello: 'hi',
      two: '2',
      to: '2',
      too: '2',
      for: '4',
      four: '4',
      be: 'b',
      you: 'u',
      at: '@',
      and: '&'
    };

    return tweet.replace(/\b(hello|two|to|too|for|four|be|you|at|and)\b/ig, function(matched){
      // debugger;
      return mapObj[matched.toLowerCase()];
    });
  },
  bulkShortener: function(tweets){
    var shortenedTweets = [ ];

    tweets.forEach(function(tweet){
      shortenedTweets.push(tweetShortener.wordSubstituter(tweet));
    });
    return shortenedTweets;
  },
  selectiveShortener: function(tweet){
    if (tweet.length < 140){
      return tweet;
    }
    else {
      var newTweet = tweetShortener.wordSubstituter(tweet);
      if (newTweet.length < 140){
        return newTweet;
      }
      else {
        return tweetShortener.shortenedTruncator(newTweet);
      }
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length < 140){
      return tweet;
    }
    else {
      return tweetShortener.wordSubstituter(tweet).slice(0,137).concat("...");
    }
  }
};
