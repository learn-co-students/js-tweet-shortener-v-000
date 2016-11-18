// 'use strict';
//
// var tweet = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";
// var wordMatch = {
//      "hello": 'hi',
//      "to": '2',
//      "two": '2',
//      "too": '2',
//      "for": '4',
//      "four": '4',
//      'be': 'b',
//      'you': 'u',
//      "at": "@",
//      "and": "&",
//    };
// // var regexVals = /\bhello\b|\bto\b|\btwo\b|\btoo\b|\bfor\b|\bfour\b|\bbe\b|\byou\b|\bat\b|\band\b/gi;
//
// // var tweetShortener = {
// //  wordSubstituter: function(tweet){
// //    var newTweet=[];
// //    newTweet = tweet.split(/[" "\,\.\?\!]/);
// //    newTweet.push(tweet);
// // //      // look in tweet for any words that match the key values from the object
// // //      // if they do then replace the newTweet[i] with the key from the object
// //      for(var i = 0; i < newTweet.length; i++){
// //       for (var word in wordMatch) {
// //         if (newTweet[i] === wordMatch[word]) {
// //           newTweet[i].replace(newTweet[i], wordMatch[word]);
// //         }
// //       }
// //     }
// //      return newTweet;
// //  }
// // };
// //
// // tweetShortener.wordSubstituter(tweet);
'use strict';
var tweet = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";

var tweetShortener = {
 wordSubstituter: function(tweet){
   var newTweet=[];
   newTweet.push(tweet);
   newTweet = tweet.split(" ");

     // look in tweet for any words that match the key values from the object
     // if they do then replace the newTweet[i] with the key from the object
     for(var i = 0; i < newTweet.length; i++){
       switch (newTweet[i]) {
         case "hello":
           newTweet[i] = "hi";
           break;
         case "two":
           newTweet[i] = "2";
           break
         case "to":
           newTweet[i] = "2";
           break
         case "too":
           newTweet[i] = "2";
           break;
         case "four":
           newTweet[i] = "4";
           break;
         case "for":
           newTweet[i] = "4";
           break;
         case "be":
           newTweet[i] = "b";
           break;
         case "you":
           newTweet[i] = "u";
           break;
         case "at":
           newTweet[i] = "@";
           break;
         case "and":
           newTweet[i] = "&";
           break;
       }
     }
     return newTweet.join(' ');
 }
};
tweetShortener.wordSubstituter(tweet);
