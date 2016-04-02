'use strict';

var tweetShortener = {
  wordSubstituter: function(string){
    var substituedWords = ["hello", "two", "to", "too", "For", "for", "four", "be", "you", "at", "and"];
    var words = string.split(' ');
    words.forEach(function(word,index,words){
      if (substituedWords.includes(word)){
        // console.log("Word found: " + word + " inside " + words + "at index: " + index);
        if (word === "hello"){
          words[index] = "hi";
        } else if (word === "two" || word === "too" || word === "to"){
          words[index] = "2";
        } else if (word === "for" || word === "four" || word == "For"){
          words[index] = "4";
        } else if (word === "be"){
          words[index] = "b";
        } else if (word === "you"){
          words[index] = "u";
        } else if (word === "at"){
          words[index] = "@";
        } else if (word === "and"){
          words[index] = "&";
        }
      }
    });
      // console.log(words.join(' '));
    return(words.join(' '));
  },
  bulkShortener: function(tweets) {
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var string = this.selectiveShortener(tweet);
    if (string.length > 140) {
      return (string.slice(0, 137) + "...");
    } else {
      return string;
    }
  }
};

