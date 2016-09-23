'use strict';

var replacementWords = {
  "hello":'hi',
  "to":'2',
  "two":'2',
  "too":'2',
  "for":'4',
  "four":'4',
  "be":'b',
  "you":'u',
  "at":'@',
  "and":'&'
};

var tweetShortener = {

  wordSubstituter: function(tweet){

    var words = tweet.split(' ');
    var replacedWords = [];

    words.forEach(function(item, index){
      var lowercaseItem = item.toLowerCase();
      if(replacementWords.hasOwnProperty(lowercaseItem)){
        item = replacementWords[lowercaseItem];
      }
      replacedWords.push(item);
    });

    return replacedWords.join(' ');
  },

  bulkShortener: function(tweets){
    var shortenedTweets = [];

    tweets.forEach(function(tweet){
        shortenedTweets.push(tweetShortener.wordSubstituter(tweet));
    });

    return shortenedTweets;
  },

  selectiveShortener: function(tweet){

      if(tweet.length > 140){
        tweet = tweetShortener.wordSubstituter(tweet);
      }

      return tweet;
  },

  shortenedTruncator: function(tweet){
    var shortenedTweet;
    if (tweet.length > 140){
      shortenedTweet = tweetShortener.wordSubstituter(tweet);
    } else {
      shortenedTweet = tweet;
    }

    if(shortenedTweet.length > 140){
      shortenedTweet = shortenedTweet.slice(0, 137) + "..."
    }

    return shortenedTweet;
  },
};
