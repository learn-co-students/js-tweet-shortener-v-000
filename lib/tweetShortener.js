'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var wordArray = tweet.split(" ");
    var i;
    var newWordArray = []
    for ( i = 0 ; i < wordArray.length; i++){
      var word = wordArray[i]
       if ( substitutes.hasOwnProperty(word)) {
         word = substitutes[word];
       }
      newWordArray.push(word);
    }
    var finalTweet = newWordArray.join(" ");
    return finalTweet;
  },
  bulkShortener: function(tweets){
    var i;
    var newTweets = []
    for ( i = 0 ; i < tweets.length; i++){
      var tweet = tweets[i];
      newTweets.push(this.wordSubstituter(tweet));
    }
    return newTweets;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return this.wordSubstituter(tweet);
    } else{
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140){
      var shortTweet = this.wordSubstituter(tweet)
      if (shortTweet.length > 140){
        var truncatedTweet = shortTweet.slice(0, 137) + "...";
        return truncatedTweet;
      }
      return shortTweet;
    } else {
      return tweet;
    }
  }
};

var substitutes = {
  "hello" : "hi",
  "to" : "2",
  "too" : "2",
  "two" : "2",
  "for" : "4",
  "For" : "4",
  "four" : "4",
  "be" : "b",
  "you" : "u",
  "at" : "@",
  "and" : "&",
}