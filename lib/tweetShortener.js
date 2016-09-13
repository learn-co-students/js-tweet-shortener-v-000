'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweet = tweet
    var res = tweet.replace(/\bhello\b/gi, 'hi');
    res = res.replace(/\bto\b/gi, '2');
    res = res.replace(/\btwo\b/gi, '2');
    res = res.replace(/\btoo\b/gi, '2');
    res = res.replace(/\bfor\b/gi, '4');
    res = res.replace(/\bfour\b/gi, '4');
    res = res.replace(/\bbe\b/gi, 'b');
    res = res.replace(/\byou\b/gi, 'u');
    res = res.replace(/\bat\b/gi, '@');
    res = res.replace(/\band\b/gi, '&');
    return res;
  },
  bulkShortener: function(tweets){
    var shorten_words = []
    tweets.forEach(function(tweet){
      shorten_words.push(tweetShortener.wordSubstituter(tweet))
    })
    return shorten_words;
  },
  selectiveShortener: function(tweet){
    if (tweet.length <= 140){
      return tweet;
    }else {
      return tweetShortener.wordSubstituter(tweet);
    };
  },
  shortenedTruncator: function(tweet){
    var output = this.selectiveShortener(tweet);

    if (output.length > 140) {
      return output.slice(0,137) + "..."
    }else {
      return output;
    }
  }
};
