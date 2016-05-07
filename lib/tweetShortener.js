'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetArray = tweet.split(" ");
    for(var i = 0;i < tweetArray.length;i++){
      var lowerCaseWord = tweetArray[i].toLowerCase();
      if (lowerCaseWord === "hello"){
        tweetArray[i] = 'hi';
      } else if (lowerCaseWord === 'to' || lowerCaseWord === "two" || lowerCaseWord === "too"){
        tweetArray[i] = '2';
      } else if (lowerCaseWord === "for"){
        tweetArray[i] = '4';
      } else if (lowerCaseWord === "be"){
        tweetArray[i] = 'b';
      } else if (lowerCaseWord === "you"){
        tweetArray[i] = 'u';
      } else if (lowerCaseWord === "at"){
        tweetArray[i] = '@';
      } else if (lowerCaseWord === "and"){
        tweetArray[i] = '&';
      }
    };
    return tweetArray.join(" ");
  },
  bulkShortener: function(tweets){
    for(var i = 0; i < tweets.length;i++){
      var tweet = tweets[i];
      tweets[i] = tweetShortener.wordSubstituter(tweet);
    };
    return tweets;
  },
  selectiveShortener: function(tweet){
    if(tweet.length > 140){
    var tweet  = tweetShortener.wordSubstituter(tweet);
    }
    return tweet;
  },
  shortenedTruncator: function(tweet){
    var selectiveTweet = tweetShortener.selectiveShortener(tweet);
    if (selectiveTweet.length > 140){
      var selectiveTweet = selectiveTweet.slice(0,137).concat("...");
    }
    return selectiveTweet;
  }
};
