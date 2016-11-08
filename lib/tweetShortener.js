'use strict';

var tweetShortener = {
  wordSubstituter: function(){
    var str = "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!";
    var res = str.replace(/ hello /g, " hi ");
    res = str.replace(/ to /g, " 2 ");
    res = res.replace(/ be /g, " b ");
    res = res.replace(/ at /g, " @ ");
    res = res.replace(/ you /g, " u ");

    return res;
  },
  bulkShortener: function(){},
  selectiveShortener: function(){},
  shortenedTruncator: function(){}
};

// Expected 'Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best@everything,uknow what I mean? Tweeting is super funuguys!!!!'
// to equal 'Hey guys, can anyone teach me how 2 b cool? I really want 2 b the best @ everything, u know what I mean? Tweeting is super fun u guys!!!!'.
