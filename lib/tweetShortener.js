'use strict';

var tweetShortener = {
  wordSubstituter: function(string){
    var words = string.split(" ")
    return words.map(function(word) {
      if (word === "hello") {
        word = "hi"
      } else if (word.toLowerCase() === "to" || word.toLowerCase() === "two" || word.toLowerCase() === "too") {
        word = "2"
      } else if (word.toLowerCase() === "be") {
        word = "b"
      } else if (word.toLowerCase() === "you") {
        word = "u"
      } else if (word.toLowerCase() === "at") {
        word = "@"
      } else if (word.toLowerCase() === "and") {
        word = "&"
      } else if (word.toLowerCase() === "for" || word.toLowerCase() === "four") {
        word = "4"
      }
      return word
    }).join(" ")
  },

  bulkShortener: function(array){
    return array.map(function(string) {
      return tweetShortener.wordSubstituter(string)
    })
  },
  selectiveShortener: function(string){
    if (string.length <= 140) {
      return string
    } else {
      return tweetShortener.wordSubstituter(string)
    }
  },
  shortenedTruncator: function(string){
    if (tweetShortener.selectiveShortener(string).length <= 140) {
      return tweetShortener.selectiveShortener(string)
    } else {
      var letters = tweetShortener.selectiveShortener(string).split("")
      return letters.slice(0, 137).join("") + "..."
    }
  }
};
