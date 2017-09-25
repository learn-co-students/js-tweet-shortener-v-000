'use strict';

var tweetShortener = {


  wordSubstituter: function(tweet){
 
  var subwords = {
    "hello" :'hi',
    "to" :'2',
    "two" :'2',
    "too" :'2',
    "For" : '4',
    "for" : '4',
    "four":'4' ,
    'be' : 'b',
    'you' :'u',
    "at" :"@",
    "and" :"&"
  }

//   Object.keys(subwords)
// ["hello", "to", "two", "too", "for, four", 
// "be", "you", "at", "and"]

  // break up the tweet into individual words
  var tweetArray = tweet.split(/\s+/);

  tweetArray.forEach(function(word, index){
    if (checkAvailability((Object.keys(subwords)), word) === true ){
      tweetArray[index] = subwords[word]
    } 
  });

  // boolean check if an array includes a value 
  function checkAvailability(array, val) {
      return array.some(function(arrVal) {
      return val === arrVal;
    });
  }

  return tweetArray.join(" ");
},

  bulkShortener: function(tweets_array){
    var result = tweets_array.map(function(string) {
      return string =  tweetShortener.wordSubstituter(string)
    });
    return result
  },

  selectiveShortener: function(tweet){
    if (tweet.length > 140){
      return tweetShortener.wordSubstituter(tweet)
    } else {
      return tweet 
    }
  },

  shortenedTruncator: function(string){
    // running it through the above method to truncate - this doesn't mean the tweet is under 140 yet
    if (string.length < 140){
      return string 
    } else {
      return tweetShortener.selectiveShortener(string).slice(0,137) + '...'
    }
  }

};


