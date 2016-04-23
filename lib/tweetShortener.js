'use strict';
var shortenings = {"hello": "hi", "to": "2", "too": "2", "two": "2", "for":"4", "four": "4", "be":"b", "you" : "u", "at": "@", "and" : "&"}
var tweetShortener = {
  wordSubstituter: function(tweet){
    var returnTweet = tweet;
    for (var key in shortenings) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (shortenings.hasOwnProperty(key)) {
      returnTweet = returnTweet.replace(new RegExp('\\b'+key+'\\b', 'gi'), shortenings[key]);
    }
}
return returnTweet;
  },
  bulkShortener: function(tweets){
    var shortenedTweets = [];
    for (var eachTweetIndex in tweets){
      shortenedTweets.push(tweetShortener.wordSubstituter(tweets[eachTweetIndex]));
    }
    return shortenedTweets;

  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    }
    else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var longTweet = tweetShortener.selectiveShortener(tweet);
    if (longTweet.length > 140) {
      return longTweet.substring(0,137)+ '...';

    }
    else {
      return tweet;
    }
  }
};
