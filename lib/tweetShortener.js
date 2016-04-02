'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetArray = tweet.split(" ");
    tweetArray.forEach(function(word,index) {
      if (word === 'hello') {
        tweetArray[index] = 'hi';
      } else if (word === 'to' || word === 'two'|| word === 'too') {
        tweetArray[index] = '2';
      } else if (word === 'for' || word === 'four' || word === "For") {
        tweetArray[index] ='4';
      } else if (word === 'be') {
        tweetArray[index] = 'b';
      } else if (word === 'you') {
        tweetArray[index] = 'u';
      } else if (word === 'at') {
        tweetArray[index] ='@';
      } else if (word === 'and') {
        tweetArray[index] = '&';
      }
    })
    return tweetArray.join(' ')
  },
  bulkShortener: function(tweetArray){
    return tweetArray.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  },
  selectiveShortener: function(tweet){
    if (tweet.length <= 140) {
      return tweet;
    } else {
      return tweetShortener.wordSubstituter(tweet);
    }
  },
  shortenedTruncator: function(tweet){
    var shortenedTweet = tweetShortener.selectiveShortener(tweet);
    if (shortenedTweet.length <= 140) {
      return shortenedTweet;
    } else {
      return shortenedTweet.slice(0,137) + '...';
    }
  }
};


/* -rules for tweet shortening
"hello" becomes 'hi'
"to, two, too" become '2'
"for, four" become '4'
'be' becomes 'b'
'you' becomes 'u'
"at" becomes "@"
"and" becomes "&"
*/
