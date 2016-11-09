'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var str = tweet;
    var res = str.replace(/ hello /g, " hi ");
    res = res.replace(/ to /g, " 2 ");
    res = res.replace(/ too /g, " 2 ");
    res = res.replace(/ two /g, " 2 ");
    res = res.replace(/ four /g, " 4 ");
    res = res.replace(/ for /g, " 4 ");
    res = res.replace(/ be /g, " b ");
    res = res.replace(/ at /g, " @ ");
    res = res.replace(/ you /g, " u ");
    res = res.replace(/ and /g, " & ");

    return res;
  },

  bulkShortener: function(tweets){
    var tLen = tweets.length;
    var shortenedTweets =[];
    for (var i = 0; i < tLen; i++) {
        var str = tweets[i];
        var res = str.replace(/ hello /g, " hi ");
        res = res.replace(/ to /g, " 2 ");
        res = res.replace(/ too /g, " 2 ");
        res = res.replace(/ two /g, " 2 ");
        res = res.replace(/ four /g, " 4 ");
        res = res.replace(/ for /g, " 4 ");
        res = res.replace(/ For /g, " 4 ");
        res = res.replace(/ be /g, " b ");
        res = res.replace(/ at /g, " @ ");
        res = res.replace(/ you /g, " u ");
        res = res.replace(/ and /g, " & ");
        shortenedTweets.push(res);
    }
    return shortenedTweets;
  },

  selectiveShortener: function(tweet){
    var str = tweet;
    if (str.length > 140) {
      var res = str.replace(/ hello /g, " hi ");
      res = res.replace(/ to /g, " 2 ");
      res = res.replace(/ too /g, " 2 ");
      res = res.replace(/ two /g, " 2 ");
      res = res.replace(/ four /g, " 4 ");
      res = res.replace(/ for /g, " 4 ");
      res = res.replace(/ be /g, " b ");
      res = res.replace(/ at /g, " @ ");
      res = res.replace(/ you /g, " u ");
      res = res.replace(/ and /g, " & ");
      return res;
    } else {
      return str;
    }
  },

  shortenedTruncator: function(tweet){
    var sub = tweetShortener.wordSubstituter(tweet);
    var ending = '...'
    if (sub.length > 140) {
      return sub.substring(0, 140 - ending.length) + ending;
    } else {
      // console.log(sub);
      return tweet;
    }
  }
};
