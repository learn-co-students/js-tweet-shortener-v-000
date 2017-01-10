'use strict';

var tweetShortener = {
  wordSubstituter: function(string){
    string.split(" ").forEach(element) {
      if (element === "hello") {
        return element = "hi"
      } else if (element === "to" || element === "two" || element = "too") {
        return element = "2"
      } else if (element === "for" || element === "four") {
        return element = "4"
      } else if (element === "be") {
        return element = "b"
      } else if (element === "you") {
        return element = "u"
      } else if (element === "at") {
        return element = "@"
      } else if (element === "and") {
        return element = "&"
      }
    }
    return string
  },

  bulkShortener: function(string){
    wordSubstituter(string);
  },

  selectiveShortener: function(string){
    if (string.length >= 140) {
      wordSubstituter(string)
    } else {
      return string
    }
  },

  shortenedTruncator: function(string){
    if (string.length > 140) {
      return string.substring(0, 140)
    } else {
      return string
    }
  }
};
