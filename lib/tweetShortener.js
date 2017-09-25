'use strict';

var wordReplacements = {
  hello: "hi",
  Hello: "Hi",
  to: 2,
  To: 2,
  two: 2,
  Two: 2,
  too: 2,
  Too: 2,
  for: 4,
  For: 4,
  four: 4,
  Four: 4,
  be: "b",
  Be: "B",
  you: "u",
  You: "U",
  at: "@",
  At: "@",
  and: "&",
  And: "&"
};


var tweetShortener = {
  wordSubstituter: function(tweet){
    var newTweet = tweet;
    var words = tweet.split(/\W+/);
    for (var i = 0; i < words.length; i++) {
      if (words[i] in wordReplacements) {
        newTweet = newTweet.replace(new RegExp('\\b' + words[i] + '\\b', 'gi'), wordReplacements[words[i]]);
      }
    }
    return newTweet;
  },
  bulkShortener: function(tweets){
    for (var i = 0; i < tweets.length; i++) {
      tweets[i] = tweetShortener.wordSubstituter(tweets[i]);
    }
    return tweets
  },
  selectiveShortener: function(tweet){
    if (tweet.length <= 140) {
      tweet = tweet;
    } else {
      tweet = tweetShortener.wordSubstituter(tweet).slice(0,140);
    }
    return tweet;
  },
  shortenedTruncator: function(tweet){
    if (tweet.length <= 140) {
      tweet = tweet;
    } else if (tweetShortener.wordSubstituter(tweet).length <= 140){
      tweet = tweetShortener.wordSubstituter(tweet)
    } else {
      tweet = tweetShortener.wordSubstituter(tweet).slice(0,137) + "...";
    }
    return tweet;
  }
};
