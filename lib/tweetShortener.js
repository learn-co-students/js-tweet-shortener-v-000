'use strict';

var replaceWords = {
  "hello": "hi",
  "to": 2,
  "two": 2, 
  "too": 2,
  "for": 4,
  "For": 4,
  "four": 4, 
  "be": "b",
  "you": "u",
  "at": "@",
  "and": "&"
}
console.log(Object.keys(replaceWords).includes('and'));
var tweetShortener = {
  wordSubstituter: function(tweet){
    var wordArray = tweet.split(" ");
    for ( var i = 0 ; i < wordArray.length ; i++ ) {
      if ( Object.keys(replaceWords).includes(wordArray[i]) ) {
        wordArray[i] = replaceWords[wordArray[i]];
      }
    }
    return wordArray.join(" ");
  },
  bulkShortener: function(tweetArray){
    var response = [];
    for ( var i = 0 ; i < tweetArray.length ; i++ ) {
      response.push( tweetShortener.wordSubstituter(tweetArray[i]) );
    }
    return response;
  },
  selectiveShortener: function(tweet){
    if ( tweet.length > 140 ) {
      return tweetShortener.wordSubstituter(tweet); 
    } else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if ( tweetShortener.selectiveShortener(tweet).length > 140 ) {
      return tweetShortener.selectiveShortener(tweet).substring(0, 137) + "...";
    } else {
      return tweetShortener.selectiveShortener(tweet);
    }
    
    
    // var shortenedTweets = tweetShortener.selectiveShortener(tweetArray);
    // var response = [];
    // for ( var i = 0 ; i < shortenedTweets.length ; i++ ) {
    //   if ( shortenedTweets[i] > 140 ) {
    //     response.push( shortenedTweets[i].substring(0, 139) );
    //   } else {
    //     response.push( shortenedTweets[i] );
    //   }
    // }
    // return response;
  }
};
