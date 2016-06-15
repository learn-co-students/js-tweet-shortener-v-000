'use strict';

var tweetShortener = {
  wordSubstituter: function(tweets) {
		var wordsToChange = ["hello", " to ", "two", " too ", " for ", "four", " be ", " you ", " at ", " and "]; 
		//note how some have spaces since some appeaer in other words and we shouldnt change those
		var changedTo = ["hi", " 2 ", "2", " 2 ", " 4 ", "4", " b ", " u ", " @ ", " & "];
		if (typeof tweets == 'string') {
			var newTweet = tweets;
			wordsToChange.forEach(function(word,i) {
				var re = new RegExp(wordsToChange[i],"g")
				newTweet = newTweet.replace(re, changedTo[i]);
			});
			return newTweet;
		}
	

	},
  bulkShortener: function(tweets){
		var wordsToChange = ["hello", " to ", "two", " too ", " for ", "four", " be ", " you ", " at ", " and "]; 
		//note how some have spaces since some appeaer in other words and we shouldnt change those
		var changedTo = ["hi", " 2 ", "2", " 2 ", " 4 ", "4", " b ", " u ", " @ ", " & "];
		if (typeof tweets == 'object') { //why isnt this 'array'
			tweets.forEach(function(tweet,index) {
				var newTweet = tweet;
				wordsToChange.forEach(function(word,i) {
					var re = new RegExp(wordsToChange[i], "gi");
					newTweet = newTweet.replace(re, changedTo[i]);
					if (i == wordsToChange.length - 1) {
						tweets[index] = newTweet;
						console.log("THE FINAL TWEET IS");
						console.log(tweets[index]);
					}
				});
			});
			return tweets;
		}
	
	},
  selectiveShortener: function(tweet){
		if (tweet.length > 140) {
			return this.wordSubstituter(tweet);
			//return this.wordSubstituter(tweet);
		} else {
			//return this.wordSubstituter(tweet);
			return tweet;
		}
		
	},
  shortenedTruncator: function(tweet){
		if (tweet.length < 140) {
			return tweet;
		}

		var newTweet = this.wordSubstituter(tweet);


		if (newTweet.length > 140) {
			newTweet = newTweet.slice(0, 140);
			return newTweet.slice(0, -3) + "...";
		}
		return newTweet;
	}
};


