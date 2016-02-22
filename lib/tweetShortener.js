'use strict';

function TweetShortener(){};

TweetShortener.prototype.wordSubstituter = function(tweet){
  var tweet_array = tweet.split(" ");
  var word;

  for (var i = 0; i < tweet_array.length; i++) {
    word = tweet_array[i].toLowerCase();
    if (word === "hello") {
      tweet_array[i] = "hi";
    } else if (word === "to" || word === "two" || word === "too") {
      tweet_array[i] = "2";
    } else if (word === "for" || word === "four") {
      tweet_array[i] = "4";
    } else if (word === "be") {
      tweet_array[i] = "b";
    } else if (word === "you") {
      tweet_array[i] = "u";
    } else if (word === "at") {
      tweet_array[i] = "@";
    } else if (word === "and") {
      tweet_array[i] = "&";
    }
  }

  return tweet_array.join(" ");
}

TweetShortener.prototype.bulkShortener = function(tweets_array){
  for (var i = 0; i < tweets_array.length; i++) {
    tweets_array[i] = this.wordSubstituter(tweets_array[i]);
  }
  return tweets_array;
}

TweetShortener.prototype.selectiveShortener = function(tweet){
  if (tweet.length > 140) {
    return this.wordSubstituter(tweet);
  } else {
    return tweet;
  }
}

TweetShortener.prototype.shortenedTruncator = function(tweet){
  var shortened_tweet = this.selectiveShortener(tweet);
  if(shortened_tweet.length > 140) {
    return shortened_tweet.slice(0, 137) + "...";
  } else {
    return shortened_tweet;
  }
}