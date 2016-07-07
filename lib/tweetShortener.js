'use strict';


var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.split(' ').map(function(word){
      var rep_word = word.toLowerCase();
      switch(rep_word) {
        case 'hello':
          return 'hi';
          break;
        case 'be':
          return 'b';
          break;
        case'to':
        case 'two':
        case 'too':
          return '2';
          break;
        case'for':
        case 'four':
          return '4';
          break;
        case 'you':
          return 'u';
          break;
        case 'at':
          return '@';
          break;
        case 'and':
          return '&';
          break;
        default:
          return word;
      }
    }).join(" ")
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    })
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var new_tweet = tweetShortener.selectiveShortener(tweet);
    if (new_tweet.length > 140) {
      return new_tweet.slice(0,137) + "...";
    } else {
      return new_tweet;
    }
  }
};
