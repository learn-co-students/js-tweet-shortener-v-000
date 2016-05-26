'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var array = [];
    array = tweet.split(' ');

    for (var i =0; i < array.length; i++){
      if(array[i] == 'hello'){
        array[i] = "hi";
      }
      else if(array[i] == 'to' || array[i] == "two" || array[i] == "too"){
        array[i] = "2";
      }
      else if(array[i].toLowerCase() == 'for' || array[i].toLowerCase() == "four"){
        array[i] = "4";
      }
      else if(array[i] == 'be'){
        array[i] = "b";
      }
      else if(array[i] == 'you'){
        array[i] = "u";
      }
      else if(array[i] == 'at'){
        array[i] = "@";
      }
      else if(array[i] == 'and'){
        array[i] = "&";
      }
    }

    var str = array.join(' ');
    return str;

  },
  bulkShortener: function(tweets){
    var short_tweets = [];
    for(var i = 0; i < tweets.length; i++){
      short_tweets.push(tweetShortener.wordSubstituter(tweets[i]));
    }

    return short_tweets;

  },
  selectiveShortener: function(tweet){
    if(tweet.length > 140){
      return tweetShortener.wordSubstituter(tweet);
    }
    else{
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if(tweet.length > 140){
      var short_tweet = tweetShortener.wordSubstituter(tweet).substring(0,137) + "...";
      return short_tweet;
    }
    else{
      return tweet;
    }
  }
};
