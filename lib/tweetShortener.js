
'use strict';

var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;

function TweetShortener(){}

TweetShortener.prototype.wordSubstituter = function(tweet){
  var replacers = {
    'at': '@',
    'and': '&',
    'be': 'b',
    'for': '4',
    'four': '4',
    'hello': 'hi',
    'to': '2',
    'two': '2',
    'too': '2',
    'you': 'u',
  };

  return tweet.replace(regex, function(match){
    return replacers[match.toLowerCase()];
  });
}
TweetShortener.prototype.bulkShortener = function(tweets){
  var smallTweets = [];
  tweets.forEach(function(tweet){
    smallTweets.push(this.wordSubstituter(tweet));
  }, this);
  return smallTweets;
},
TweetShortener.prototype.selectiveShortener = function(tweet){
  if(tweet.length >= 140){
    return this.wordSubstituter(tweet);
  }else{
    return tweet;
  }
},
TweetShortener.prototype.shortenedTruncator = function(tweet){
  var result = this.selectiveShortener(tweet);
  if(result.length >= 140){
    return result.slice(0,137) + "...";
  }else{
    return result;
  }
}
