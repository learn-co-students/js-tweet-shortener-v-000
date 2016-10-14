'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var arr = tweet.split(' ');
    for(var i=0; i < arr.length; i++) {
      if(arr[i] === "hello"){
        arr[i] = "hi"
      } else if (arr[i] === "to"){
        arr[i] = "2"
      } else if (arr[i] === "two"){
        arr[i] = "2"
      } else if (arr[i] === "too"){
        arr[i] = "2"
      } else if (arr[i] === "for"){
        arr[i] = "4"
      } else if (arr[i] === "four"){
        arr[i] = "4"
      } else if (arr[i] === "be"){
        arr[i] = "b"
      } else if (arr[i] === "you"){
        arr[i] = "u"
      } else if (arr[i] === "at"){
        arr[i] = "@"
      } else if (arr[i] === "and"){
        arr[i] = "&"
      }
    }
    return arr.join(' ');
  },
  bulkShortener: function(tweets){
    var arr = []
    for(var i = 0; i < tweets.length; i++){
      arr.push(this.wordSubstituter(tweets[i]))
    }
    return arr
  },
  selectiveShortener: function(tweet){
    if(tweet.length > 140) {
      return this.wordSubstituter(tweet)
    } else if (tweet.length < 140) {
      return tweet
    }
  },
  shortenedTruncator: function(tweet){
    if(tweet.length > 140) {
      var shorty = this.selectiveShortener(tweet)
      if (shorty.length > 140) {
        return shorty.slice(0,137) + "..."
      }
    }
    return tweet
  }
};
