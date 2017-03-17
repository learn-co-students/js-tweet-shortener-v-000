'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
	return tweet.replace(/\bhello\b/gi, "hi")
  				.replace(/\b(to|two|too)\b/gi, "2")
				.replace(/\b(for|four)\b/gi, "4")
			    .replace(/\bbe\b/gi, "b")
		        .replace(/\byou\b/gi, "u")
			    .replace(/\bat\b/gi, "@")
			    .replace(/\band\b/gi, "&")
  },
  bulkShortener: function(tweets){
  	return tweets.map(function(tweet){
  		return(tweetShortener.wordSubstituter(tweet));
  	})
  },
  selectiveShortener: function(tweet){
  	if (tweet.length > 140) {
  		return tweetShortener.wordSubstituter(tweet)
  	} else {
  		return tweet
  	}
  },
  shortenedTruncator: function(tweet){
  	var newtweet = tweetShortener.wordSubstituter(tweet)
  	if (tweet.length > 140) {
  		return newtweet.slice(0, 137) + "..."
  	} else {
  		return tweet
  	}
  }
};
