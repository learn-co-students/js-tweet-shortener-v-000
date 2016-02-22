'use strict';

function TweetShortener(){}

TweetShortener.prototype.wordSubstituter = function(tweet){
  var replacements = {
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
  };
  var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
  return tweet.replace(regex, function(match){
    return replacements[match.toLowerCase()];
  });
}
TweetShortener.prototype.bulkShortener = function(tweets){
  var shortTweets = [];
  tweets.forEach(function(tweet){
    shortTweets.push(this.wordSubstituter(tweet));
  }, this);
  return shortTweets;
},
TweetShortener.prototype.selectiveShortener = function(tweet){
  if(tweet.length >= 140){
    return this.wordSubstituter(tweet);
  }else{
    return tweet;
  }
},
TweetShortener.prototype.shortenedTruncator = function(tweet){
  var shorts = this.selectiveShortener(tweet);
  if(shorts.length >= 140){
    return shorts.slice(0,137) + "...";
  }else{
    return shorts;
  }
}