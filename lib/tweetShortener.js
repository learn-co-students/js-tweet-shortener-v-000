'use strict';

var acceptableSubs = {
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
}

var tweetShortener = {
  wordSubstituter: function(){},
  bulkShortener: function(){},
  selectiveShortener: function(){},
  shortenedTruncator: function(){}
};

tweetShortener.wordSubstituter = function(tweet) {
  var tweetArray = tweet.split(" ")
  var shortTweet = "";
  tweetArray.forEach(function(word) {
    var testWord = word.toLowerCase().match(/[a-z]+/)
    if (acceptableSubs[testWord] !== undefined) {
      shortTweet += " " + acceptableSubs[testWord] // + word.match(/\W+/)
    }else{
      shortTweet += " " + word
    }
  })
  return shortTweet.trim()
}

tweetShortener.bulkShortener = function(tweetArray) {
  var shortTweets = []
  for (var i in tweetArray){
    shortTweets.push(this.wordSubstituter(tweetArray[i]))
  }
  return shortTweets
}

tweetShortener.selectiveShortener = function(tweet) {
  if (tweet.length > 140) {
    // debugger;
    return this.wordSubstituter(tweet)
  }else{
    return tweet
  }
}

tweetShortener.shortenedTruncator = function(tweet) {
  // debugger;
  if (tweet.length > 140) {
    var tweet = this.wordSubstituter(tweet)
    var trunc = tweet.slice(0, 137) + "..."
    return trunc
  }else{
    return tweet
  }


}

