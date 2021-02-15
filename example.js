import {words} from './index.js'

console.log("-----\nThree most popular words:")

// This will output these words: 
words.getMostPopular(3).forEach(word => {
    console.log(word)
})

console.log("-----\nThree most popular fifteen letter long words")

words.getMostPopularLength(3, 15).forEach(word => {
    console.log(word)
})

console.log("-----\nThree most popular words that match this regular expression.")

words.getMostPopularRegex(3, /able$/).forEach(word => {
    console.log(word)
})

console.log("-----\nThree most popular words that this function matches.")

words.getMostPopularFilter(3, word => {return ['popular', 'english', 'words'].includes(word)}).forEach(word => {
    console.log(word)
})

console.log("-----\nThe rank of the word 'popular'.")

console.log(words.getWordRank('popular'))
