'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetArray = tweet.split(' ').map(function(word) {
      if(word === "be"){
        return 'b'
      } else if (word === 'to' || word == 'too' || word == 'two') {
        return word = '2'
      }else if (word == 'for' || word == 'four' || word == 'Four' || word == 'For') {
        return  word = '4'
      }else if (word == 'be') {
        return word = 'b'
      }else if (word == 'you') {
        return word = 'u'
      }else if (word == 'at') {
        return word = '@'
      }else if (word == 'and') {
        return '&'
      }else {
        return word
      }
   }).join(" ")
    return tweetArray
  },
  bulkShortener: function(manyTweets){
    return manyTweets.map(function(tweet){
      return tweetShortener.wordSubstituter(tweet)
    })
  },
  selectiveShortener: function(tweet){
    if(tweet.length > 140) {
      return tweetShortener.wordSubstituter(tweet)
    } else {
      return tweet
    }
  },
  shortenedTruncator: function(tweet){
    // return tweetShortener.selectiveShortener(tweet)
    var x = tweetShortener.selectiveShortener(tweet)
    console.log(x)
    if (x.length > 140) {
      return  x.slice(0,137) + '...' 
      console.log( x.slice(0,137) + '...' )
    } else {
      return tweet
    }
   }
};


// [ 'Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best @ everything, u know what I mean? Tweeting is super fun u guys!!!!', 'OMG u guys, u won't believe how sweet my kitten is. My kitten is like super cuddly & 2 cute 2 b believed right?', 'GUISEEEEE this is so fun! I'm tweeting 4 u guys & this tweet is SOOOO long it's gonna b way more than u would think twitter can handle, so shorten it up u know what I mean? I just can never tell how long 2 keep typing!', 'New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy & mammogram soon. Prevention is key! #swag', 'I'm running out of example tweets 4 u guys, which is weird, because I'm a writer & this is just writing & I tweet all day. For real, u guys. For real.' ]
 // [ 'Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best @ everything, u know what I mean? Tweeting is super fun u guys!!!!', 'OMG u guys, u won't believe how sweet my kitten is. My kitten is like super cuddly & 2 cute 2 b believed right?', 'GUISEEEEE this is so fun! I'm tweeting 4 u guys & this tweet is SOOOO long it's gonna b way more than u would think twitter can handle, so shorten it up u know what I mean? I just can never tell how long 2 keep typing!', 'New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy & mammogram soon. Prevention is key! #swag', 'I'm running out of example tweets 4 u guys, which is weird, because I'm a writer & this is just writing & I tweet all day. 4 real, u guys. 4 real.' ].
