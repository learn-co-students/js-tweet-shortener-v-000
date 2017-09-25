'use strict';

var replacements = {
hello: 'hi',
to: '2',
two: '2',
too: '2',
for: '4',
four: '4',
be: 'b',
you: 'u',
at: "@",
and: "&",
}

var tweetShortener = {
  wordSubstituter: function(tweet){
    var new_tweet = tweet.split(' ');
    for (var i = 0; i < new_tweet.length; i++){
        if (new_tweet[i].toLowerCase() in replacements) {
          new_tweet[i] = replacements[new_tweet[i].toLowerCase()];
        };
      }

    return new_tweet.join(' ')
  },


  bulkShortener: function(tweets){
    for (var i = 0; i < tweets.length; i++) {
       tweets[i] = tweetShortener.wordSubstituter(tweets[i]);
     }
     return tweets
  },

  selectiveShortener: function(tweet){
    return tweet.length > 140 ? this.wordSubstituter(tweet) : tweet
  },

  shortenedTruncator: function(tweet){
    var shortened_tweet = this.selectiveShortener(tweet);
    if (shortened_tweet.length > 140){ return shortened_tweet.slice(0, 137) + '...'}
    else {
      return shortened_tweet;
    }
  }

};
