'use strict';

var dictionary = {
	"hello"	: 'hi',
	"to"	: '2',
	"too" 	: '2',
	"two"	: '2',
	"for"	: '4',
	"For"	: '4',
	"four"	: '4',
	"be"	: 'b',
	"you"	: 'u',
	"at"	: '@',
	"and"	: '&'
}

var tweetShortener = {
  wordSubstituter: function(str){
  	for(var key in dictionary){
  		var regex = new RegExp('\\b'+key+'\\b', 'g');
  		str = str.replace(regex,dictionary[key]);
  	}
  	return str;
  },
  bulkShortener: function(tweets){
  	for(var i = 0; i < tweets.length; i++){
  		tweets[i] = tweetShortener.wordSubstituter(tweets[i]);
  	}
  	return tweets;
  },
  selectiveShortener: function(str){
  	if(str.length>140){
  		str = tweetShortener.wordSubstituter(str);
  		if(str.length>140){
  			str = str.substring(0,137)+"...";
  		}
  	}
  	return str;
  },
  shortenedTruncator: function(str){
  	return tweetShortener.selectiveShortener(str);
  }
};
