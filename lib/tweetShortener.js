'use strict';

var tweetShortener = {


  wordSubstituter: function(tweet) {
    var wordArray = tweet.split(" ");

      for (var i=0; i < wordArray.length; i++) {
        switch(wordArray[i]) {
          case "hello":
            wordArray[i] = "hi";
            break;
          case "to":
          case "two":
          case "too":
            wordArray[i] = "2";
            break;
          case "four":
          case "for":
          case "For":
            wordArray[i] = "4";
            break;
          case "be":
            wordArray[i] = "b";
            break;
          case "you":
            wordArray[i] = "u";
            break;
          case "at":
            wordArray[i] = "@";
            break;
          case "and":
            wordArray[i] = "&";
            break;
          default:
            wordArray[i] = wordArray[i];
            break;
        }
     };
      return wordArray.join(" ");
    },

    bulkShortener: function(tweets) {
      for (var i = 0; i < tweets.length; i++) {
        tweets[i] = this.wordSubstituter(tweets[i]);
      }
      return tweets;
    },

    selectiveShortener: function(tweet) {
      if (tweet.split("").length < 141) {
        return tweet;
      } else {
        return this.wordSubstituter(tweet);
      }
    },

     shortenedTruncator: function(tweet) {
       if (tweet.split("").length < 141) {
         return tweet
       } else {
            var newTweet = this.wordSubstituter(tweet);
            if (newTweet.split("").length > 140) {
              var editedTweet = newTweet.split("")
              editedTweet.splice(137).push("...");
              editedTweet.push("...");
              return editedTweet.join("");
            } else {
              return newTweet;
            }
          }
    }
}
