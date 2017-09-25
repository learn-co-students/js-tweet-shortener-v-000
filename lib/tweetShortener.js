"use strict";

var tweetShortener = {
  wordSubstituter: function(tweet){
    var splitWords = tweet.split(' ');

    for (var i = 0; i < splitWords.length; i++) {
      switch (splitWords[i].toLowerCase()){
        case 'hello':
          splitWords[i] = 'hi'
          break;
        case 'to':
          splitWords[i] = '2'
          break;
        case 'two':
          splitWords[i] = '2'
          break;
        case 'too':
          splitWords[i] = '2'
          break;
        case 'for':
          splitWords[i] = '4'
          break;
        case 'four':
          splitWords[i] = '4'
          break;
        case 'be':
          splitWords[i] = 'b'
          break;
        case 'you':
          splitWords[i] = 'u'
          break;
        case 'at':
          splitWords[i] = '@'
          break;
        case 'and':
          splitWords[i] = '&'
          break;
      }
    }
    return splitWords.join(' ');
  },
  bulkShortener: function(tweets){
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },
  selectiveShortener: function(tweet){
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    }

    return tweet;
  },
  shortenedTruncator: function(tweet){
    var result = this.selectiveShortener(tweet);

    if (result.length >= 140) {
      return result.slice(0, 137) + "...";
    }

    return result;
  }
};
