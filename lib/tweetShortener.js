'use strict';
var tweetShortener = {
  wordSubstituter: function(tweet){
   var newTweet=[];
   newTweet.push(tweet);
   newTweet = tweet.split(" ");

     // look in tweet for any words that match the key values from the object
     // if they do then replace the newTweet[i] with the key from the object
     for(var i = 0; i < newTweet.length; i++){
       switch (newTweet[i].toLowerCase()) {
         case "hello":
           newTweet[i] = "hi";
           break;
         case "two":
           newTweet[i] = "2";
           break
         case "to":
           newTweet[i] = "2";
           break
         case "too":
           newTweet[i] = "2";
           break;
         case "four":
           newTweet[i] = "4";
           break;
         case "for":
           newTweet[i] = "4";
           break;
         case "be":
           newTweet[i] = "b";
           break;
         case "you":
           newTweet[i] = "u";
           break;
         case "at":
           newTweet[i] = "@";
           break;
         case "and":
           newTweet[i] = "&";
           break;
       }
     }
     return newTweet.join(' ');
   },
   bulkShortener: function(tweets) {
    return tweets.map(function(tweet) {
      return this.wordSubstituter(tweet);
    }, this);
  },

  selectiveShortener: function(tweet) {
    if (tweet.length >= 140) {
      return this.wordSubstituter(tweet);
    }

    return tweet;
  },

  shortenedTruncator: function(tweet) {
    var result = this.selectiveShortener(tweet);

    if (result.length >= 140) {
      return result.slice(0, 137) + "...";
    }
    return result;
  }
}
tweetShortener.bulkShortener();
