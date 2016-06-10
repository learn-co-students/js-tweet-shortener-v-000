'use strict';

var tweetShortener = {
  wordSubstituter: function(text){
    return text.split(' ').map(function(word){
      switch(word){
        case 'hello':
          return 'hi';
        case 'be':
          return 'b';
        case 'to':
        case 'To':
        case 'two':
        case 'Two':
        case 'too':
        case 'Too':
          return '2';
        case 'for':
        case 'four':
        case 'For':
        case 'Four':
          return '4';
        case 'you':
          return 'u';
        case 'at':
          return '@';
        case 'and':
          return '&';
        default:
          return word;
      }
    })
    .join(' ');
  },

  bulkShortener: function(array_of_texts){
    return array_of_texts.map(function(text){
      return tweetShortener.wordSubstituter(text);
    });
  },

  selectiveShortener: function(text){
    if(text.length >= 140){
      return tweetShortener.wordSubstituter(text);
    } else {
      return text;
    }
  },
  shortenedTruncator: function(text){
    if(text.length >= 140){
      return tweetShortener.wordSubstituter(text).slice(0, 137).concat('...');
    } else {
      return text;
    }
  }
};