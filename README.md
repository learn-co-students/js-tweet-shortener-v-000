# Tweet Shortener

Instead of using prototypes and constructors in this lab, we'll be using a javascript object with functions attached. (You'll sometimes hear this referred to as "object literal" notation, because it uses an object — literally.)

In Ruby, modules can be used to hold methods that act on the values passed to it, and nothing else.

```ruby
module StringFancifier
  def self.make_fancy(string)
    "<*-~/#{string}/~=*>"
  end
end
```

`.make_fancy` only knows about the argument passed, and has no internal state.

In lib/tweetShortener.js, you'll see:

```javascript
var tweetShortener = {
    wordSubstituter: function(){},
    bulkShortener: function(){},
    selectiveShortener: function(){},
    shortenedTruncator: function(){},
};
```

This would look something like the following in ruby:

```ruby
module TweetShortener
  def self.word_substituter; end
  def self.bulk_shortener; end
  def self.selective_shortener; end
  def self.shortened_truncator; end
end
```

On we go.

## Instructions

A client has hired you to automatically post some of their brand messages to twitter, but the problem is that some of the tweets are too long. Your job is to automatically shorten them by replacing longer words with shorter representations (i.e. "two" becomes "2").

You'll want to write a method that will take a tweet, search it for words that you can substitute, and return a substituted string tweet. For instance, the tweet "Hello to you, I'm at home" would become "Hi 2 u, I'm @ home". The client has provided the following acceptable substitutes.

```bash
"hello" becomes 'hi'
"to, two, too" become '2'
"for, four" become '4'
'be' becomes 'b'
'you' becomes 'u'
"at" becomes "@"
"and" becomes "&"
```

and here is the list of tweets:

  >1. "Hey guys, can anyone teach me how to be cool? I really want to be the best at everything, you know what I mean? Tweeting is super fun you guys!!!!"

  >2. "OMG you guys, you won't believe how sweet my kitten is. My kitten is like super cuddly and too cute to be believed right?"

  >3. "I'm running out of example tweets for you guys, which is weird, because I'm a writer and this is just writing and I tweet all day. For real, you guys. For real."

  >4. "GUISEEEEE this is so fun! I'm tweeting for you guys and this tweet is SOOOO long it's gonna be way more than you would think twitter can handle, so shorten it up you know what I mean? I just can never tell how long to keep typing!"

  >5. "New game. Middle aged tweet followed by #youngPeopleHashTag Example: Gotta get my colonoscopy and mammogram soon. Prevention is key! #swag"

1. Write a method to shorten a string based on the allowed substitutes

2. Write a method that iterates over the list of tweets, shortens them, and returns a new array with the shortened tweets

  hint: you'll need a way to look up each word and see if it has a substitution


  Now the client has come back to you. They love the program, but they noticed that even tweets that are under 140 characters are being shortened. Now they want you to only shorten the tweet if it's too long.

3. Write a new method that only does the substitutions if the tweet is longer than 140 characters. If the tweet is 140 characters or shorter, just return the original tweet.

  Things are going great, but you're noticing that some tweets are too long still, even after substituting shorter words. Being the conscientious developer that you are, you talk to the client about this scenario and decide together that the best thing to do is just truncate the string to 140 characters if it's still too long after you do the substitution.

4. Write another method that truncates the tweet to 140 characters with an ellipsis if it's still too long after substitution. E.g. "Random Passage satisfies the craving for those details that ..."


To run the specs follow these commands:

```bash
# first install the new gem to run the tests
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install learn-co

# to run in the command line run
learn

#to run in the browser
learn -b
```

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-tweet-shortener' title='Tweet Shortener'>Tweet Shortener</a> on Learn.co and start learning to code for free.</p>
