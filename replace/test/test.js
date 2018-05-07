const replace = require("../src/main")

const assert = require('assert')


// en un texto una palabra que yo le paso se ha de hacer replace por tantas XXXX como la palabra tenga
describe('Replace', function() {

    let text = 'the quick brown fox jumps over the lazy dog'

    it('should replace the word fox for how many xs have the word', function() {
      let word = 'fox'
      assert.equal(replace.wordInASentence(word, text), 'the quick brown XXX jumps over the lazy dog');
    }),

    it('should replace the words in array for how many xs have the words', function(){
      let words = ['fox', 'dog']
      assert.equal(replace.wordInASentence(words, text), 'the quick brown XXX jumps over the lazy XXX');
    })

});