'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet) {
  	var substituted = [];
  	tweet.split(" ").forEach(function(word) {
  		var downCased = word.toLowerCase();
  		if (downCased === "hello") {
  			sustituted.push("hi") 
  		} else if (downCased === "to" || downCased === "two" || downCased === "too") {
  			substituted.push("2")
  		}	else if (downCased === "for" || downCased === "four") {
  			substituted.push("4")
  		}	else if (downCased === "be") {
  			substituted.push("b")
  		}	else if (downCased === "you") {
  			substituted.push("u")
  		}	else if (downCased === "at") {
  			substituted.push("@")
  		}	else if (downCased === "and") {
  			substituted.push("&")
  		}	else {
  			substituted.push(word)
  		}
  	})
  	return substituted.join(" ");
  },
  
  bulkShortener: function(tweets) {
		return tweets.map(function(sentence) {	
  		return tweetShortener.wordSubstituter(sentence)
  	});
  },
  

  selectiveShortener: function(tweet) {	
  		return (tweet.length > 140) ? tweetShortener.wordSubstituter(tweet) : tweet;
  },
  
  shortenedTruncator: function(tweet) {
  	var evaluated = tweetShortener.selectiveShortener(tweet);
  	if (evaluated.length > 140) {
  		var newSentence = evaluated.split("").splice(0,137).join("");
			return newSentence + '...';
		} else {
			return evaluated;
		}
  }
};

