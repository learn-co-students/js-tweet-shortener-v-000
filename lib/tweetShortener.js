'use strict';

var dictionary = {"hello" : "hi",
"to": "2",
"two": "2",
"too": "2",
"for": "4",
"four": "4",
"be": "b",
"you": "u",
"at": "@",
"and": "&"}

var tweetShortener = {
  wordSubstituter: function(tweet){
    var arr = tweet.split(" ");
    $.each(arr, function(i, v){
      if(v.toLowerCase() in dictionary){
        arr[i] = dictionary[v.toLowerCase()];
        }
      });
      return arr.join(" ");
  },
  bulkShortener: function(tweet_arr){
    $.each(tweet_arr, function(i, v){
      tweet_arr[i] = tweetShortener.wordSubstituter(v);
    });
    return tweet_arr
  },
  selectiveShortener: function(tweet){
    debugger
    if (tweet.length > 140){
      return tweetShortener.wordSubstituter(tweet);
    }else{
      return tweet
    }
  },
  shortenedTruncator: function(tweet){
    var t = tweetShortener.selectiveShortener(tweet);
    if (t.length <= 140){
      return tweet
    }else{
      t = t.slice(0, 137) + "..."
    }
    return t
  }
};
