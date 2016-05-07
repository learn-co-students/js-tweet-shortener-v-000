'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetArray = tweet.split(" ");
    // for (var i = 0; i < tweetArray.length; i++){
    //   switch (tweetArray[i]){
    //     case "hello":
    //       tweetArray[i] = "hi"
    //       break;
    //     case "to" || "two" || "too":
    //       tweetArray[i] = "2"
    //       break;
    //     case "four" || "for":
    //       tweetArray[i] = "4"
    //       break;
    //     case "be":
    //       tweetArray[i] = "b"
    //       break;
    //     case "you":
    //       tweetArray[i] = "u"
    //       break;
    //     case "at":
    //       tweetArray[i] = "@"
    //       break;
    //     case "and":
    //       tweetArray[i] = "&"
    //       break;
    //   }
    // }
    var replacements = {
      "hello": 'hi',
      "to": '2',
      "two": '2',
      "too": '2',
      "for": '4',
      "four": '4',
      'be': 'b',
      'you': 'u',
      "at": "@",
      "and": "&",
    };
    var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
    return tweet.replace(regex, function(match){
      return replacements[match.toLowerCase()];
    });
  },

  bulkShortener: function(tweets) {
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },

  selectiveShortener: function(tweet) {
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    }

    return tweet;
  },

  shortenedTruncator: function(tweet) {
    var result = this.selectiveShortener(tweet);

    if (result.length > 139) {
      return result.slice(0, 137) + "...";
    }
    return result;
  }
};
