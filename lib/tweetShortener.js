'use strict';

var subsLookup = [
  [/\b[Hh]ello\b/g, 'hi'],
  [/\b[Tt]wo|[Tt]oo|[Tt]o\b/g, '2'],
  [/\b[Ff]or|[Ff]our\b/g, '4'],
  [/\b[Bb]e\b/g, 'b'],
  [/\b[Yy]ou\b/g, 'u'],
  [/\b[Aa]t\b/g, '@'],
  [/\b[Aa]nd\b/g, '&']
]


var tweetShortener = {
  wordSubstituter: function (tweet) {
    subsLookup.forEach(function (sub) {
      tweet = tweet.replace(sub[0], sub[1])
    })

    return tweet
  },

  bulkShortener: function (tweets) {
    return tweets.map(function (tweet) {
      return this.wordSubstituter(tweet)
    }, this)
  },

  selectiveShortener: function (tweet) {
    return (tweet.length < 140) ? tweet : this.wordSubstituter(tweet)
  },

  shortenedTruncator: function (tweet) {
    var tweet = this.selectiveShortener(tweet)

    return (tweet.length < 140) ? tweet : tweet.slice(0, 137) + "..."
  }
};
