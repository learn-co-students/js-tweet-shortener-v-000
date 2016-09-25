'use strict';

var tweetShortener = {
  wordSubstituter: function(string){
    var subs = {
      "hello" : 'hi',
      "Hello" : 'Hi',
      "to" : '2',
      "To" : '2',
      "two" : '2',
      "Two" : '2',
      "too" : '2',
      "Too" : '2',
      "for" : '4',
      "For" : '4',
      "four" : '4',
      "Four" : '4',
      "be" : 'b',
      "Be" : 'B',
      "you" : 'u',
      "You" : 'U',
      "at" : "@",
      "At" : "@",
      "and" : "&",
      "And" : "&"
    }

    for (var k in subs) {
      string = string.replace(new RegExp('\\b' + k + '\\b', 'g'), subs[k]);
    }
    return string;
  },

  bulkShortener: function(array){
    var shorter = []
    for (var string in array) {
      shorter.push(tweetShortener.wordSubstituter(array[string]));
    }
    return shorter;
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    tweet = tweetShortener.selectiveShortener(tweet);
    if (tweet.length > 140) {
      return tweet.slice(0,137) + "...";
    } else {
      return tweet;
    }
  }
};
