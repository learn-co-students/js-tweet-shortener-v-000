console.log("hello");
var tweetShortener = {
  wordSubstituter: function(tweet){
  var  dict = {"hello" :'hi',
    "to" : "2",
    "two":"2",
    "too":"2",
    "for" : "4",
    "four" : "4",
    "be" : "b",
    "you":  "u",
    "For" : "4",
    "at" : "@",
    "and" :"&"
    };
    var newtweet= "";
    var array = tweet.split(" ");
    for(var i=0;i<array.length;i++)
    {
      if(array[i] in dict)
     newtweet=newtweet+dict[array[i]];
      else
     newtweet=newtweet+array[i];
     if(i!=array.length-1)
       newtweet=newtweet+ " ";
    }
    return newtweet;
  },
  bulkShortener: function(tweets){
    var newtweets=[];
    for(var i=0;i<tweets.length;i++)
    {
        newtweets.push(tweetShortener.wordSubstituter(tweets[i]))
    }
    return newtweets;
  },
  selectiveShortener: function(tweet){
    if(tweet.length <140)
       return tweet
    else
       return tweetShortener.wordSubstituter(tweet)
  },
  shortenedTruncator: function(tweet){
    if(tweet.length <=140)
       return tweet
    else
    {
       newtweet=tweetShortener.wordSubstituter(tweet)
      if (newtweet.length >140)
         newtweet = newtweet.substr(0,136) + " ..."
         return newtweet;
    }
  }
};


//tweetShortener.wordSubstituter("i love you too")
//tweetShortener.bulkShortener(["i love you too","i love you too","i love you too"]);
