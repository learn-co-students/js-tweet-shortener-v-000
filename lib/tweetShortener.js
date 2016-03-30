'use strict';
function TweetShortener(){};

var replacements = {
  'hello': 'hi',
  'to': '2',
  'two': '2',
  'too': '2',
  'for': '4',
  'four': '4',
  'be': 'b',
  'you': 'u',
  'at': '@',
  'and': '&'
}

TweetShortener.prototype.wordSubstituter = function(tweet){
  for (var key in replacements){
    var word = '\\b' + key + '\\b';
    var regex = new RegExp(word, 'gi');
    tweet = tweet.replace(regex, replacements[key]);
  };
  return tweet;
};

TweetShortener.prototype.bulkShortener = function(tweets){
  var that = this;
  return tweets.map(function(tweet){
    return that.wordSubstituter(tweet);
  });
};

TweetShortener.prototype.selectiveShortener = function(tweet){
  if (tweet.length > 140) {
    return this.wordSubstituter(tweet);
  } else {
    return tweet;
  };
};

TweetShortener.prototype.shortenedTruncator = function(tweet){
  var truncatedTweet = this.selectiveShortener(tweet)
  if (truncatedTweet.length > 140){
    return truncatedTweet.slice(0, 137) + '...';
  } else {
    return tweet;
  };
};
