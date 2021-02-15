# Popular Engish Words

This is a long list of English words, order by popularity.

You can ask for as many or as few as you want.  For example, you can ask for the top 1000 English words, or the top 10000 English words.

These words come from parsing Wikipedia.

# To Use in Javascript

```
import {words} from './index.js'

// This will give you the three most popular words
var popularWords = words.getMostPopular(3)

popularWords.forEach(word => {
    console.log(word)
})
```

# Methods available (in the "words" object)

getMostPopular(count) 

getMostPopularFilter(count, test) 

getMostPopularRegex(count, regex)

getMostPopularLength(count, length)

getWordRank(word) 

getWordAtPosition(position) 

getWordCount() 

getAll()