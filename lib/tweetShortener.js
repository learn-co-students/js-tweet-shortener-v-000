'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
  	var regex = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
  	var words = {
		  "hello": "hi",
		  "to": "2",
		  "two": "2",
		  "too": "2",
		  "for": "4",
		  "four": "4",
		  "be": "b",
		  "you": "u",
		  "at": "@",
		  "and": "&"
  	}

  	return tweet.replace(regex, function(match) {
  		return words[match.toLowerCase()];
  	});

  },

  bulkShortener: function(tweets) {
  	return tweets.map(function(tweet) {
  		return tweetShortener.wordSubstituter(tweet);
  	});
  	return tweets;
  },

  selectiveShortener: function(tweet) {
  	if(tweet.length >= 140) {
  		return this.wordSubstituter(tweet);
  	} else {
  		return tweet;
  	}
  },

  shortenedTruncator: function(tweet) {
  	var shortened = tweetShortener.selectiveShortener(tweet);
  	if(shortened.length >= 140) {
  		return shortened.substring(0, 137) + "...";
  	} else {
  		return shortened;
  	}
  }
};


// "hello" becomes 'hi'
// "to, two, too" become '2'
// "for, four" become '4'
// 'be' becomes 'b'
// 'you' becomes 'u'
// "at" becomes "@"
// "and" becomes "&"
