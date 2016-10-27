'use strict';
// String.prototype.replace = function(search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, 'gi'), replacement);
// };

var tweetShortener = {
  wordSubstituter: function(tweet){
  	if (tweet !== undefined) {
	  	if (tweet.toLowerCase().indexOf("hello") > -1) {
	  		// console.log("in hello case");
	  		tweet = tweet.replace(/hello/gi, 'hi');
	  	}
	  	if (tweet.toLowerCase().indexOf(" to ") > -1) {
	  		// console.log("in to case");
			tweet = tweet.replace(/ to /gi, ' 2 ');
	  	}
		if (tweet.toLowerCase().indexOf("too") > -1) {
			// console.log("in too case");
			tweet = tweet.replace(/too/gi, '2');
		}
		if (tweet.toLowerCase().indexOf("two") > -1) {
			// console.log("in two case");
			tweet = tweet.replace(/two/gi, '2');	
		}
		if (tweet.toLowerCase().indexOf("for") > -1) {
			// console.log("in for case");
			tweet = tweet.replace(/for/gi, '4');
		}
		if (tweet.toLowerCase().indexOf("four") > -1) {
			// console.log("in four case");
			tweet = tweet.replace(/four/gi, '4');
		}
		if (tweet.toLowerCase().indexOf(" be ") > -1) {
			// console.log("in be case");
			tweet = tweet.replace(/ be /gi, ' b ');
		}
		if (tweet.toLowerCase().indexOf("you ") > -1) {
			// console.log("in you case");
			tweet = tweet.replace(/you /gi, 'u ');
		}
		if (tweet.toLowerCase().indexOf(" at ") > -1) {
			// console.log("in at case");
			tweet = tweet.replace(/ at /gi, ' @ ');
		}	
		if (tweet.toLowerCase().indexOf(" and ") > -1) {
			// console.log("in and case");
			tweet = tweet.replace(/ and /gi, ' & ');
		}
		else {
			return tweet;	
	  	}
	  	return tweet;
  	}
  },
  bulkShortener: function(tweets){
  	var sub = this.wordSubstituter;
  	var shortened = tweets.map(function(tweet) {
  		// console.log("sub in map: " + sub);
  		return sub(tweet);
  	});
  	return shortened;
  },
  selectiveShortener: function(tweet){
  	var sub = this.wordSubstituter;
	if (tweet.length > 140) {
		tweet = sub(tweet);
	}
	return tweet;
  },
  shortenedTruncator: function(tweet){
  	var sub = this.wordSubstituter;
		if (tweet.length > 140) {
			var shortened = sub(tweet);
			tweet = shortened.slice(0, 137) + '...';
		}
		return tweet;
  }
};
