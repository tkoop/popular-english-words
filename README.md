# Popular Engish Words

This is a long list of English words, order by popularity.

You can ask for as many or as few as you want.  For example, you can ask for the top 1000 English words, or the top 10000 English words.

These words come from parsing Wikipedia.

# To Install and Use in Javascript

From command line:
```
npm i popular-english-words
```

You might need to do this first in a brand new project.
```
npm init --yes
```


In your JavaScript file:
```
import {words} from 'popular-english-words'

// This will give you the three most popular words
var popularWords = words.getMostPopular(3)

popularWords.forEach(word => {
    console.log(word)
})
```

# Methods available (in the "words" object)

`getMostPopular(count)`

This returns an array of `count` of the most popular words

`getMostPopularLength(count, length)`

This returns an array of `count` words of length `length`

`getMostPopularFilter(count, test)`

This returns an array of `count` words that pass the test. `test` is a function that is passed a words and should return a boolean.  See the example.js file for an example.

`getMostPopularRegex(count, regex)`

This returns an array of `count` words that match the `regex` regular expression.  See the example.js file for an example.

`getWordRank(word)`

This returns an integer of where it is found in our list. The first word is zero. If the word is not found, it returns -1.

`getWordAtPosition(position)` 

This returns the word at position `position`.  Zero is the first word. `position` should not be greater than `getWordCount() - 1`

`getWordCount()` 

Returns the total number of words in our list.

`getAll()`

Returns our full list of words as an array.

# About these English words
These English words, about 225,000 in total, were parsed from the English version of Wikipedia (about 80GB of text), near the beginning of 2021. Words are defined as any continuous occurrences of the characters between 'a' and 'z', case insensitive.  Since it is difficult to differentiate an apostrophe at the end of a word, such in as `We ask in Jesus' name.`, and a group of words in single quotes, such as `His hat said, 'Property of Jesus' on it.`, the apostrophe/single quote character was not considered a character. (In the above first phrase, `Jesus'` technically should be a word, and in the second phrase, it should only be `Jesus`, but to write code that can tell them apart?  Ain't nobody got time for that.)  So you won't find the word `won't` in this list.  The same applies to the dash character, so you won't find a "no-brainer" in here either.  Using this definition of a word, all people names and place names made it in.  Also, there are some other strange things, like a long string of x's, or something like that.  They made it in too.  Also, abbreviations are in there.  Words that had less than one hundred total occurrences in all twenty million pages of Wikipedia didn't make it in.  Also, I went through the top thousand words trying to pick out clumps of letters that I didn't consider real words.  There could be more in there.  If you find some, and you feel the need to do something about it, feel free to make a pull request to this Github repository.