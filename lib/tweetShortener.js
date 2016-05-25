'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var substitutes = {
      "hello": "hi",
      "to": "2",
      "two": "2",
      "too": "2",
      "be": "b",
      "you": "u",
      "at": "@",
      "and": "&",
      "for": "4",
      "four": "4"
    };
  var stringArray = tweet.split(" ");
  for (var i = 0; i < stringArray.length; i++) {
    for (var key in substitutes) {
      if (stringArray[i].toLowerCase() === key) {
        stringArray.splice(i, 1, substitutes[key])
      }
    }  
  }
  return stringArray.join(" ");
  },

  bulkShortener: function(tweets){
  for (var i = 0; i < tweets.length; i++) {
    var newTweet = this.wordSubstituter(tweets[i]);
    tweets.splice(i, 1, newTweet);
  }
  return tweets;
  },

  selectiveShortener: function(tweet) {
    if (tweet.length > 140) {
      return this.wordSubstituter(tweet);
    } else {
      return tweet;
    }
  },

  shortenedTruncator: function(tweet){
    var result = this.selectiveShortener(tweet);
    if (result.length >= 140) {
      return result.slice(0, 137) + "...";
    } else {
      return tweet;
    }

  } 
};

//method to shorten string based on allowed subs
// function wordSubstituter(string) {
//   var substitutes = {
//     "hello": "hi",
//     "to": "2",
//     "two": "2",
//     "too": "2",
//     "be": "b",
//     "you": "u",
//     "at": "@",
//     "and": "&"
//   };
//   var stringArray = string.split(" ");
//   for (var i = 0; i < stringArray.length; i++) {
//     for (var key in substitutes) {
//       if (stringArray[i] === key) {
//         stringArray.splice(i, 1, substitutes[key])
//       }
//     }  
//   }
//   return stringArray.join(" ");
// }

//method to iterate over array of strings and return shortened tweets
// function bulkShortener(array) {
//   for (var i = 0; i < array.length; i++) {
//     var newString = wordSubstituter(array[i]);
//     array.splice(i, 1, newString);
//   }
//   return array;
// }

//method to only shorten if > 140 characters
// function selectiveShortener(array) {
//  for (var i = 0; i < array.length; i++) {
//     if (array[i].length > 140) {
//       var newString = wordSubstituter(array[i]);
//       array.splice(i, 1, newString);
//     }
//   }
//   return array; 
// }

//method to truncate to 140 characters with ellipsis
// function shortenedTruncator(array) {
//  for (var i = 0; i < array.length; i++) {
//     if (array[i].length > 140) {
//       newString = wordSubstituter(array[i]);
//       if (newString.length > 140) {
//         truncatedString = newString.slice(0, 137) + "...";
//       }
//       array.splice(i, 1, truncatedString);
//     }
//   }
//   return array; 
// }
