'use strict';

var shortenedWords = {
  to: '2',
  too: '2',
  two: '2',
  you: 'u',
  be: 'b',
  at: '@',
  hello: 'hi',
  For: '4',
  for: '4',
  four: '4',
  and: '&',
  see: 'c'
}

var tweetShortener = {
  wordSubstituter: function(tweet){
    tweet = tweet.split(/\b/);

    tweet.forEach(function(word, index){
      if(shortenedWords[word]) {
        tweet[index] = shortenedWords[word];
      }
    });
    return tweet.join("");
  },

  bulkShortener: function(tweets){
    var tweetsOut = [];
    tweets.forEach(function(tweet){
      tweet = tweetShortener.wordSubstituter(tweet);
      tweetsOut.push(tweet);
    });
    return tweetsOut;
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      tweet = tweetShortener.wordSubstituter(tweet);
    }
    return tweet;
  },
  shortenedTruncator: function(tweet){
    tweet = tweetShortener.selectiveShortener(tweet);
    if(tweet.length > 140) {
      tweet = tweet.slice(0, 137) + "...";
    }
    return tweet;
  }
};