'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet_words){
    return tweet_words.split(' ').map(function(word){
      var test_word = word.toLowerCase();
      switch(test_word) {
        case 'hello':
          return 'hi';
        case 'be':
          return 'b';
        case 'to': case 'two': case 'too':
          return '2';
        case 'for': case 'four':
          return '4';
        case 'at':
          return '@';
        case 'and':
          return '&';
        case 'you':
          return 'u';
        default:
          return word;
      }
    })
    .join(' ');
  },

  bulkShortener: function(bulk_tweets){
    return bulk_tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    })
  },
  selectiveShortener: function(tweet){
    if(tweet.length >= 140){
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if(tweet.length >=140){
      return tweetShortener.wordSubstituter(tweet).slice(0,137).concat('...');
    } else {
      return tweet;
    }
  }
};
