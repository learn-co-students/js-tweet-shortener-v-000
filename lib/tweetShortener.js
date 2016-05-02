'use strict';

// var testTweet = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";

var tweet_one = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";
    var tweet_two = "OMG you guys, you won't believe how sweet my kitten is. My kitten is like super cuddly and too cute to be believed right?";
    var tweet_three = "GUISEEEEE this is so fun! I'm tweeting for you guys and this tweet is SOOOO long it's gonna be way more than you would think twitter can handle, so shorten it up you know what I mean? I just can never tell how long to keep typing!";
    var tweet_four = "New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy and mammogram soon. Prevention is key! #swag";
    var tweet_five = "I'm running out of example tweets for you guys, which is weird, because I'm a writer and this is just writing and I tweet all day. For real, you guys. For real.";
var testTweets = [tweet_one, tweet_two, tweet_three, tweet_four, tweet_five];

var acceptableSubs = {
  "hello": 'hi',
  "to": '2',
  "two": '2',
  "too": '2',
  "for": '4', 
  "four": '4',
  'be': 'b',
  'you': 'u',
  "at": "@",
  "and": "&",
}

var tweetShortener = {
  wordSubstituter: function(){},
  bulkShortener: function(){},
  selectiveShortener: function(){},
  shortenedTruncator: function(){}
};

tweetShortener.wordSubstituter = function(tweet) {
  var tweetArray = tweet.split(" ")
  var shortTweet = "";
  tweetArray.forEach(function(word) {
    if (acceptableSubs[word.match(/[A-Za-z]+/)] !== undefined) {
      shortTweet += " " + acceptableSubs[word] // + word.match(/\W+/)
    }else{
      shortTweet += " " + word
    }
  })
  return shortTweet.trim()
}

tweetShortener.bulkShortener = function(tweetArray) {
// debugger;
  var shortTweets = []
  for (var i in tweetArray){
    shortTweets.push(this.wordSubstituter(tweetArray[i]))
  }
  return shortTweets
}

