'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var result = [];
    var words = tweet.split(" ");
    for (var i in words){
      switch (words[i].toLowerCase()){
        case "hello":
          result.push('hi');
          break;
        case ("two"):
          result.push('2');
          break;
        case ("too"):
          result.push('2');
          break;
        case ("to"):
          result.push('2');
          break;
        case ("for" || "four"):
          result.push('4');
          break;
        case "be":
          result.push('b');
          break;
        case "you":
          result.push('u');
          break;
        case "at":
          result.push('@');
          break;
        case "and":
          result.push('&');
          break;
        default:
          result.push(words[i]);
      }
    }
    return result.join(" ");
  },
  bulkShortener: function(tweets){
    var bulkResult = [];
    for (var t in tweets){
      bulkResult.push(this.wordSubstituter(tweets[t]));
    }
    return bulkResult;
  },
  selectiveShortener: function(tweet){
    var selectResult;
    if (tweet.length > 140){
      selectResult = this.wordSubstituter(tweet);
    }
    else{
      selectResult = tweet;
    }
    return selectResult;
  },
  shortenedTruncator: function(tweet){
    var shortened = this.selectiveShortener(tweet);
    if (shortened.length > 140){
      return (shortened.slice(0,137) + "...");
    }
    else {
      return shortened;
    }
  }
};
