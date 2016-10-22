'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){

      var tw = tweet.replace(/(?:^|\b)(tw|to|t)o(?=\b|$)/ig, 2);
      var tw2 = tw.replace(/(?:^|\b)(at)(?=\b|$)/ig, '@');
      var tw3 = tw2.replace(/(?:^|\b)(be)(?=\b|$)/ig, 'b');
      var tw4 = tw3.replace(/(?:^|\b)fo(r|or)(?=\b|$)/ig, 4);
      var tw5 = tw4.replace(/(?:^|\b)(you)(?=\b|$)/ig, 'u');
      var tw6 = tw5.replace(/(?:^|\b)(and)(?=\b|$)/ig, '&');
      var tw7 = tw6.replace(/(?:^|\b)(hello)(?=\b|$)/ig, 'hi');

      return tw7;

  },

  bulkShortener: function(tweets){
      return  (tweetShortener.wordSubstituter(tweets.join('~'))).split('~');
  },

  selectiveShortener: function(tweet){
    if(tweet.length >= 140){
      return tweetShortener.wordSubstituter(tweet);
    }else {
        return tweet;
      }
  },

  shortenedTruncator: function(tweet){
    var tw = tweetShortener.selectiveShortener(tweet).substring(0, 140);
    return tw.length == 140 ? tw.replace(tw.substr(137), '...') : tw;
  }
};
