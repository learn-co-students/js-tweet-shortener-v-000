'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var substitutes = {
      hello: 'hi',
      to: '2',
      two: '2',
      too: '2',
      for: '4',
      four: '4',
      be: 'b',
      you: 'u',
      at: "@",
      and: "&"
    }

    var wordArray = tweet.split(" ");
    var newWordArray = wordArray.map(function(word) {
      var wordLower = word.toLowerCase();
      if (wordLower in substitutes) {
        return substitutes[wordLower]}
      return word;
    });
    return newWordArray.join(" ");
  },
  bulkShortener: function(tweets){

    var newTweets = tweets.map(function(tweet) {
      return tweetShortener.wordSubstituter(tweet)
    });
    return newTweets;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet)
    }
    return tweet;
  },
  shortenedTruncator: function(tweet){
    var newTweet = tweetShortener.selectiveShortener(tweet)
    if (newTweet.length > 140){
      return newTweet.slice(0, 137) + "...";
    }
    return newTweet;
  }
};
