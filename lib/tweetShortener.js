'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
  	return tweet.replace(/\b(hello)\b/ig, "hi").replace(/\b(to|two|too)\b/ig, "2").replace(/\b(for|four)\b/ig, "4").replace(/\b(be)\b/ig, "b").replace(/\b(you)\b/ig, "u").replace(/\b(at)\b/ig, "@").replace(/\b(and)\b/ig, "&");
  },
  bulkShortener: function(tweets){
  	return tweets.map(function(tweet){
  	  return tweetShortener.wordSubstituter(tweet);
  	})
  },
  selectiveShortener: function(tweet){
  		if (tweet.length > 140){
  			return tweetShortener.wordSubstituter(tweet);
  		} else {
  			return tweet;
  		}
  },
  shortenedTruncator: function(tweet){
  	var shortenedTweet = tweetShortener.wordSubstituter(tweet);
  		if (shortenedTweet.length > 140){
  			return shortenedTweet.substring(0, 137) + "..."
  		} else {
  			return tweet;
  		}
  }
};
