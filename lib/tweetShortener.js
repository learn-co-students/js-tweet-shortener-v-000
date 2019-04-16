'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
  	tweet = tweet.replace(/\bhello\b/g, 'hi');
  	tweet = tweet.replace(/\bHello\b/g, 'Hi');
  	tweet = tweet.replace(/\b([tT]o|[tT]wo|[tT]oo)\b/g, '2');
  	tweet = tweet.replace(/\b([fF]or|[fF]our)\b/g, '4');
  	tweet = tweet.replace(/\bbe\b/g, 'b');
  	tweet = tweet.replace(/\bBe\b/g, 'B');
  	tweet = tweet.replace(/\byou\b/g, 'u');
  	tweet = tweet.replace(/\bYou\b/g, 'U');
  	tweet = tweet.replace(/\b[aA]t\b/g, '@');
  	tweet = tweet.replace(/\b[aA]nd\b/g, '&');
  	return tweet;
  },
  bulkShortener: function(tweets){
  	var shortTweets = [];
  	tweets.forEach(function(tweet){
  		shortTweets.push(tweetShortener.wordSubstituter(tweet));
  	});
  	return shortTweets;
  },
  selectiveShortener: function(tweet){
  	if (tweet.length > 140) {
  		return tweetShortener.wordSubstituter(tweet);
  	} else {
  		return tweet;
  	}
  },
  shortenedTruncator: function(tweet){
  	var shortTweet = tweetShortener.selectiveShortener(tweet);
  	if (shortTweet.length > 140) {
  		return shortTweet.substring(0, 137) + "...";
  	}
  	return shortTweet;
  }
};
