'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetSplit = tweet.split(" ");
    var replacements = {
      'hello': 'hi',
      'to': '2',
      'two': '2',
      'too': '2',
      'for': '4',
      'four': '4',
      'be': 'b',
      'you': 'u',
      'at': '@',
      'and': '&',
    };

    var shortenedTweetSplit = $.map(tweetSplit, function(name, index){
      if ( replacements.hasOwnProperty( name.toLowerCase() ) ){
        return replacements[name.toLowerCase()]}
      else {return name}
    });
      return (shortenedTweetSplit.join(" "));
    },
  //
  bulkShortener: function(tweets){
    return tweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet);
    });
  },
  //
  //
  //
  //
  //
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet);
    }
    else {return tweet}
  },


  shortenedTruncator: function(tweet){

    var shortenedTweet = tweetShortener.selectiveShortener(tweet);
    if (shortenedTweet.length > 140) {
      return shortenedTweet.substring(0, 137) + "..."}
    else {
        return tweetShortener.selectiveShortener(tweet); }

  }


};
