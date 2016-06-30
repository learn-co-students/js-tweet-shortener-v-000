'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.replace(/\bhello\b/gi, "hi").replace(/\bto\b/gi, "2").replace(/\btwo\b/gi, "2").replace(/\btoo\b/gi, "2").replace(/\bfor\b/gi, "4")
    .replace(/\bfour\b/gi, "4").replace(/\bbe\b/gi, "b").replace(/\byou\b/gi, "u").replace(/\bat\b/gi, "@").replace(/\band\b/gi, "&");
  },

  bulkShortener: function(tweets){
    var shortened_tweets = [];
    tweets.forEach(function(singletweet) {var short_singletweet = tweetShortener.wordSubstituter(singletweet);
    shortened_tweets.push(short_singletweet);});
    return shortened_tweets;
  },

  selectiveShortener: function(tweet){
    if (tweet.length<=140){return tweet}
    else {var toolong_singletweet = tweetShortener.wordSubstituter(tweet); return toolong_singletweet;}
  },

  shortenedTruncator: function(tweet){
    var tweetinput = tweetShortener.selectiveShortener(tweet);

    if (tweetinput.length > 140) {var truncate = "..."; var shortening = tweetinput.substring(0,137);
    var shortandtrun = shortening.concat(truncate); return shortandtrun;}
    else {return tweetinput;}
  }
};
