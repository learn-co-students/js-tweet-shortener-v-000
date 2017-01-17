'use strict';

var tweetShortener = {

	// responds to tweetShortener.wordSubstituter(tweet)
	wordSubstituter: function(tweet){
	    var substitutes = {
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
		// global + insensitive

		return tweet.replace(regex, function(word){
			return substitutes[word.toLowerCase()];
		});

	},

	bulkShortener: function(tweets) {
		return tweets.map(function(tweet) {
			return tweetShortener.wordSubstituter(tweet); //call method on tweetShortener object, not on tweet callback
		});
	},

	// would also work:
	// bulkShortener: function(tweets){
	// 	return tweets.map(function(tweet) {
	// 		return this.wordSubstituter(tweet);
	// 	}, this);
	// },

	selectiveShortener: function(tweet){
		if (tweet.length >= 140) {
			return this.wordSubstituter(tweet);
		} else {
			return tweet;
		};		
	},

	// if the length of shortened tweet is still longer than 140, then we truncate it
	shortenedTruncator: function(tweet){
		// get the actual shortened tweet (original if < 140, or with substitute if was longer)
	    var result = this.selectiveShortener(tweet);

	    // test to see if needs further shortening, through truncation
	    if (result.length > 140) {
	      return result.slice(0, 137) + "...";
	    } else {
	      return result;
	    }		
	}
};
