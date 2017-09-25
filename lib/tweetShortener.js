'use strict';

var tweetShortener = {
  wordSubstituter: function(string){
    var split = string.split(" ")
    for (var i = 0; i < split.length; i ++) {
      if (split[i] === 'hello') {
        split[i] = 'hi'
      }
      else if (split[i] === 'to' || split[i] === 'two' || split[i] === 'too') {
        split[i] = '2'
      }
      else if (split[i] === 'for' || split[i] === 'four' || split[i] === 'For') {
        split[i] = '4'
      }
      else if (split[i] === 'be'){
        split[i] = 'b'
      }
      else if (split[i] === 'you') {
        split[i] = 'u'
      }
      else if (split[i] === 'at') {
        split[i] = '@'
      }
      else if (split[i] === 'and'){
        split[i] = '&'
      }
    }
  var newstring = split.join(' ')
  return newstring


  },
  bulkShortener: function(array){
    var bulk = []
    for (var i = 0; i < array.length; i ++) {
      bulk.push(tweetShortener.wordSubstituter(array[i]))
    }
    return bulk
  },
  selectiveShortener: function(string){
    var strings = string

    if (strings.length > 140) {
      return tweetShortener.wordSubstituter(strings)
    }
    else {
      return strings
    }
  },
  shortenedTruncator: function(string){
    var trunc = tweetShortener.selectiveShortener(string)
    if (trunc.length > 140) {
      var t = trunc.slice(0,137) + "..." 
      return t
    }
    else {
      return trunc
    }

  }
};



