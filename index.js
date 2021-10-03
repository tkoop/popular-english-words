import {words as list} from './words.js'


class Words {

    getMostPopular(count) {
        return list.slice(0, count)
    }

    getMostPopularFilter(count, test) {
        var result = []
        list.every(word => {
            if (test(word)) {
                result.push(word)
            }
            if (result.length == count) return false
            return true
        })
        return result
    }

    getMostPopularRegex(count, regex) {
        var result = []
        list.every(word => {
            if (word.match(regex)) {
                result.push(word)
            }
            if (result.length == count) return false
            return true
        })
        return result
    }

    getMostPopularLength(count, length) {
        var result = []
        list.every(word => {
            if (word.length == length) {
                result.push(word)
            }
            if (result.length == count) return false
            return true
        })
        return result
    }

    // Returns -1 if not found
    getWordRank(word) {
        for(var i=0; i<list.length; i++) {
            if (word == list[i]) return i
        }
        return -1
    }

    // "position" must be between 0 and getWordCount(), inclusive
    getWordAtPosition(position) {
        return list[position]
    }

    getWordCount() {
        return list.length
    }

    getAll() {
        return list
    }
}

const words = new Words()

export {words} 
