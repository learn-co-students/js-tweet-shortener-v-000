'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var newTweetArr = tweet.split(' ').map(function(word){
      switch (word) {
        case 'hello':
          word = 'hi';
          return word;
          break;
        case 'to':
        case 'two':
        case 'too':
          word = '2';
          return word;
          break;
        case 'for':
        case 'For':
        case 'four':
          word = '4';
          return word;
          break;
        case 'be':
          word = 'b';
          return word;
          break;
        case 'you':
          word = 'u';
          return word;
          break;
        case 'at':
          word = '@';
          return word;
          break;
        case 'and':
          word = '&';
          return word;
        default:
          return word;
      }
    });
    return newTweetArr.join(' ');
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  }, 
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    }
    else
      return tweet;
  },
  shortenedTruncator: function(tweet){
    if (tweet.length < 140) {
      return tweet;
    }
    else {
      var subbedTweet = tweetShortener.wordSubstituter(tweet);
      if (subbedTweet.length < 140) {
        return subbedTweet;
      }
      else {
        return subbedTweet.slice(0, 137) + "..."
      }
    }
  }
};


