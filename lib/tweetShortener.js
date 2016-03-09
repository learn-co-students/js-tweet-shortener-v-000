'use strict';

var tweetShortener = {
  wordSubstituter: function(string){
    var tweet = string.replace(/\sat(\s|\W)/g, ' @ ');
    tweet = tweet.replace(/\s?hello(\s|\W)?/g, 'hi');
    tweet = tweet.replace(/\s?(too|two|to)(\s|\W)?/g, ' 2 ');
    tweet = tweet.replace(/\s?(for|four)(\s|\W)?/gi, ' 4 ');
    tweet = tweet.replace(/\sbe(\s|\W)/g,' b ');
    tweet = tweet.replace(/\syou(\s|\W)?/g, ' u ');
    tweet = tweet.replace(/\sat(\s|\W)?/g,' @ ');
    tweet = tweet.replace(/\sand(\s|\W)?/g, ' & ');
    return tweet;
  },
  bulkShortener: function(tweetArray){
    var tweetShort = this
    return tweetArray.map(function(tweet){
      return tweetShort.wordSubstituter(tweet);
    });
  },
  selectiveShortener: function(tweet){
    if(tweet.length > 140){
      return this.wordSubstituter(tweet);
    }
    else{
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    var shortTweet = this.selectiveShortener(tweet);
    if (shortTweet.length > 140){
      return shortTweet.slice(0,-(shortTweet.length-140)- 3) + '...';
    }
    else{
      return shortTweet;
    }
  }
};
