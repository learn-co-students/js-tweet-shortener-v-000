'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
    var words = tweet.split(' ');
    words.forEach(function(word, index) {
      switch(word) {
        case "hello":
        case "Hello":
          words[index] = "hi";
          break;
        case "to":
        case "To":
        case "two":
        case "Two":
        case "too":
        case "Too":
          words[index] = "2";
          break;
        case "for":
        case "For":
        case "four":
        case "Four":
          words[index] = "4";
          break;
        case "be":
        case "Be":
          words[index] = "b";
          break;
        case "you":
        case "You":
          words[index] = "u";
          break;
        case "at":
        case "At":
          words[index] = "@";
          break;
        case "and":
        case "And":
          words[index] = "&";
          break;
        default:
          words[index] = word;
      }
    })
    return words.join(' ');
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
    var shortened = this.selectiveShortener(tweet);
    if (shortened.length >= 140) {
      return shortened.slice(0, 137) + '...';
    }
    return shortened;
  }
}
