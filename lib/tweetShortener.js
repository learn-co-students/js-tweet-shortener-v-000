'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
  	var mapObj = {
  		hello: "hi",
  		to: "2",
  		two: "2",
  		too: "2",
  		for: "4",
  		four: "4",
  		be: "b",
  		you: "u",
  		at: "@",
  		and: "&"
  	};
  	
  	//http://stackoverflow.com/questions/14013223/how-to-replace-multiple-strings-with-the-replace-method
  	var find = 'hello|to|two|too|for|four|be|you|at|and';
  	var regex = RegExp('\\b(' + find + ')\\b', 'gi');
  	return tweet.replace(regex,  function(matched){
  		return mapObj[matched.toLowerCase()];
  	});
  },
  
  bulkShortener: function(tweets){
  	return tweets.map(function(tweet){
  		return tweetShortener.wordSubstituter(tweet);
  	})
  },
  
  selectiveShortener: function(tweet){
  	if(tweet.length > 140){
  		return tweetShortener.wordSubstituter(tweet)
  	}else{
  		return tweet;
  	}
  },
  
  shortenedTruncator: function(tweet){
  	var t = tweet;
  	if (t.length > 140){
  		t = tweetShortener.wordSubstituter(t);
  		t = t.substr(0, 137) + "...";
  	}
  	return t;
  }
};
