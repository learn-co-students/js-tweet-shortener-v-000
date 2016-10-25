'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var mapObj = {
      hello:"hi",
      to:"2",
      two:"2",
      too:"2",
      for:"4",
      four:"4",
      be:"b",
      you:"u",
      at:"@",
      and:"&"
    };
    Object.keys(mapObj).forEach(function(key){
      tweet = tweet.replace(new RegExp("\\b" + key + "\\b", "gi"), mapObj[key]);
    })
    return tweet;
  },
  bulkShortener: function(tweets){
    var save = this;
    tweets = tweets.map(function(tweet){
      tweet = save.wordSubstituter(tweet);
      return save.selectiveShortener(tweet);
    });
    return tweets;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return tweetShortener.shortenedTruncator(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140){
      var short = tweet.substring(0, 137);
      short += "...";
      return short;
      } else {
      return tweet;
    }
  }
};
