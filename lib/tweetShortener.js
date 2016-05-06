'use strict';

var tweetShortener = {
    wordSubstituter: function(tweet) {
      var words = tweet.split(" ");
      var matches = {
        "hello" : "hi",
        "to" : "2",
        "too" : "2",
        "two" : "2",
        "for" : "4",
        "four" : "4",
        "be" : "b",
        "you" : "u",
        "at" : "@",
        "and" : "&"
      };

      // This checks case sensitivity of matched words.
      // It catches the "For"/"for" error, without downcasing all letters. =)
      words = words.map(function(word) {
        if(matches[word.toLowerCase()]) {
        return word.toLowerCase();
        }
        return word;
      });

      words.forEach(function(word, index){
        if(matches[word]) {
        // iterating through words array, looking for matches.
          words[index] = matches[word];
        // take that word and replace the matched (shorter) word
        }
      });
        return words.join(" ");  
        // join the words array back together with pretty spaces!
    },

    bulkShortener: function(tweets) {
      var newTweets = [];
      tweets.forEach(function(tweet) {
        tweet = tweetShortener.wordSubstituter(tweet);
        newTweets.push(tweet);
      });
      return newTweets;
    },

    selectiveShortener: function(tweet) {
      if(tweet.length > 140) {
        tweet = tweetShortener.wordSubstituter(tweet);
      }; 
      return tweet;
    },

    shortenedTruncator: function(tweet) {
      tweet = tweetShortener.selectiveShortener(tweet);
      if(tweet.length > 140) {
        tweet = tweet.slice(0, 137) + "...";
      }
      return tweet;
    }
};