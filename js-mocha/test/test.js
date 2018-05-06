const greetings = require("../src/main")

const assert = require('assert')


// en un texto una palabra que yo le paso se ha de hacer replace por tantas XXXX como la palabra tenga
describe('Replace', function() {

    let text = 'the quick brown fox jumps over the lazy dog'
    let word = 'fox'

    it('should replace the word fox for how many xs have the word', function() {
      console.log(greetings.hola())
      assert.equal(text, 'the quick brown XXX jumps over the lazy dog');
    });

});