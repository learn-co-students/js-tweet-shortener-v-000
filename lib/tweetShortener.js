'use strict';

var tweetShortener = {
  
  wordSubstituter: function(tweet){
    var subableWords = ["hello", "to", "two", "too", "for", "four", "For", "be",
    "you", "at", "and"];
    var replacements = ["hi", "2", "2", "2", "4", "4", "4", "b", "u", "@", "&"];
    var tweetArray = tweet.split(" ");
    tweetArray.forEach(function(word){
      if (subableWords.indexOf(word) != -1){
        tweetArray.splice(tweetArray.indexOf(word), 1, replacements[subableWords.indexOf(word)]);
      }  
    })
    return tweetArray.join(" ");
  },

  bulkShortener: function(tweetList){
    var revisedTweets = [];
    tweetList.forEach(function(tweet){
      revisedTweets.push(tweetShortener.wordSubstituter(tweet));
    });
    return revisedTweets;
  },

  selectiveShortener: function(tweet){
      if (tweet.length > 140) {
        return tweetShortener.wordSubstituter(tweet);
      } else {
        return tweet;
      }
  },

  shortenedTruncator: function(tweet){
    var shortenedTweet = tweetShortener.selectiveShortener(tweet);
    if (shortenedTweet.length <= 140) {
      return shortenedTweet;
    } else {
      return shortenedTweet.substring(0, 136) + ' ...';
    }
  }
}
