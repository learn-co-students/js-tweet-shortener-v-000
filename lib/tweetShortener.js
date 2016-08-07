'use strict';

var tweetShortener = {

  wordSubstituter: function(tweet){
    var dict = {
      hello: 'hi',
      to: '2',
      two: '2',
      too: '2',
      for: '4',
      four: '4',
      be: 'b',
      you: 'u',
      at: "@",
      and: "&"
    }

    var newWords = tweet.split(' ').map(function(word) {
      var w = word.toLowerCase();
      if (w in dict) {return dict[w]}
      return word
    });
    return newWords.join(' ');
  },


  bulkShortener: function(tweets){
    var ans =  tweets.map(function(t) {
      return tweetShortener.wordSubstituter(t);
    })
    return ans
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {return tweetShortener.wordSubstituter(tweet)}
    return tweet
  },


  shortenedTruncator: function(tweet){
    var ans = tweetShortener.selectiveShortener(tweet);
    if (ans.length > 140) {
      return ans.slice(0, 137) + "...";
    }
    return ans
  }
};
