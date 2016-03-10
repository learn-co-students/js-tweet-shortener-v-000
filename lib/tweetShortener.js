'use strict';

// "hello" becomes 'hi'
// "to, two, too" become '2'
// "for, four" become '4'
// 'be' becomes 'b'
// 'you' becomes 'u'
// "at" becomes "@"
// "and" becomes "&"
var tweet = "GUISEEEEE this is so fun! I'm tweeting for you guys and this tweet is SOOOO long it's gonna be way more than you would think twitter can handle, so shorten it up you know what I mean? I just can never tell how long to keep typing!";

var tweetShortener = {
  wordSubstituter: function(tweet){
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
  },
  bulkShortener: function(tweets){
    var shortenedTweets = [];
    var that = this;
      tweets.forEach(function(tweet){
        // So ugly
        shortenedTweets.push(that.wordSubstituter(tweet));
      });
      return shortenedTweets;
  },
  selectiveShortener: function(tweet){
    if(tweet.length>140){
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var new_tweet = this.selectiveShortener(tweet);
    if (new_tweet.length>140){
      new_tweet = new_tweet.slice(0, 137) + '...'
    }
      return new_tweet;

  }
};


console.log(tweetShortener.shortenedTruncator(tweet));
console.log(tweetShortener.shortenedTruncator(tweet).length);
