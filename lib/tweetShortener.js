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

  },
  selectiveShortener: function(tweet){

  },
  shortenedTruncator: function(tweet){
    debugger
    if (tweet.length > 140){
      var short = tweet.substring(0, 137);
      short += "...";
      return short;
    } else {
      return tweet;
    }
  }
};
