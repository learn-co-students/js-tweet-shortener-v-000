
var tweetShortener = {

  wordSubstituter: function(tweet){
    return splitTweet(tweet);},

  bulkShortener: function(tweetArray){
   return tweetArray.map(function(tweet) {
      return splitTweet(tweet)})},

  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return splitTweet(tweet);
    } else {
      return tweet;}},

  shortenedTruncator: function(tweet){
    var tweety = this.selectiveShortener(tweet)
    if (tweety.length > 140) {
      return (tweety.slice(0, 137).concat("..."))
    } else {
      return tweety}}
}

// ** HELPER METHOD ** //

function splitTweet(tweet) {
  var splitted = tweet.split(" ");
  var convertedTweet = splitted.map(function(word) {
    if (word === "hello") {
      return "hi";
    } else if (word === "to" || word === "two" || word === "too") {
        return '2';
    } else if (word === "for" || word === "four" || word === "For") {
        return '4';
    } else if (word === "be") {
        return "b";
    } else if (word === "you") {
        return "u";
    } else if (word === "at") {
        return "@";
    } else if (word === "and") {
        return "&";
    } else {
      return word;
    }
  })
  return convertedTweet.join(" ");
};
