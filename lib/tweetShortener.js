'use strict';


var tweetShortener = {
  wordSubstituter: function(string){

    var greeting = string.replace(/\shello\s/gi, ' hi ');
    var two = greeting.replace(/\sto\s|\stwo\s|\stoo\s/gi, ' 2 ');
    var four = two.replace(/\sfor\s|\sfour\s/i, ' 4 ');
    var be = four.replace(/\sbe\s/gi, ' b ');
    var you = be.replace(/\syou\s/gi, ' u ');
    var at = you.replace(/\sat\s/gi, ' @ ');
    var replaced = at.replace(/\sand\s/gi, ' & ');
    return replaced;
  },
  bulkShortener: function(array){
    var finishedWords = [];

    array.forEach(function(string){
      var greeting = string.replace(/\shello\s/gi, ' hi ');
      var two = greeting.replace(/\sto\s|\stwo\s|\stoo\s/gi, ' 2 ');
      var four = two.replace(/\sfor\s|\sfour\s/gi, ' 4 ');
      var be = four.replace(/\sbe\s/gi, ' b ');
      var you = be.replace(/\syou\s/gi, ' u ');
      var at = you.replace(/\sat\s/gi, ' @ ');
      var replaced = at.replace(/\sand\s/gi, ' & ');
      finishedWords.push(replaced)
    })
      return finishedWords;
  },
  selectiveShortener: function(string){
  //var finishedWords = [];
  //debugger
  //array.forEach(function(string){
    var characters = [];
    var characters = string.split('');

    if(characters.length>140){  
      var greeting = string.replace(/\shello\s/gi, ' hi ');
      var two = greeting.replace(/\sto\s|\stwo\s|\stoo\s/gi, ' 2 ');
      var four = two.replace(/\sfor\s|\sfour\s/gi, ' 4 ');
      var be = four.replace(/\sbe\s/gi, ' b ');
      var you = be.replace(/\syou\s/gi, ' u ');
      var at = you.replace(/\sat\s/gi, ' @ ');
      var replaced = at.replace(/\sand\s/gi, ' & ');
    //finishedWords.push(and);

      return replaced;
    }else{
    //finishedWords.push(string);
      return string;
  }    
  //return finishedWords;
//})
},
shortenedTruncator: function(string){
      var characters = [];
      var characters = string.split('');

      if(characters.length>140){  
        var greeting = string.replace(/\shello\s/gi, ' hi ');
        var two = greeting.replace(/\sto\s|\stwo\s|\stoo\s/gi, ' 2 ');
        var four = two.replace(/\sfor\s|\sfour\s/gi, ' 4 ');
        var be = four.replace(/\sbe\s/gi, ' b ');
        var you = be.replace(/\syou\s/gi, ' u ');
        var at = you.replace(/\sat\s/gi, ' @ ');
        var replaced = at.replace(/\sand\s/gi, ' & ');
        
        var andCharacters = replaced.split('');
        if(andCharacters.length>140)
          {
            var truncString = replaced.substr(0,137)+'...'
            return truncString;
          };
    }else{
      return string;
    }    
  
}
};

