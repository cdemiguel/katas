const replace = {
  wordInASentence(word, text) {
    if (Array.isArray(word) === false) {
      let _word = word.split("")
      for (i = 0; i < _word.length; i++) {
        word += "X"
      }
      word = word.slice(_word.length)
      text = text.replace("fox", word)
      return text
    } else {
      let wordsCodify = []
      let wordCodify = ""
      for (i = 0; i < word.length; i++) {
        let _word = word[i].split("")
        for (j = 0; j < _word.length; j++) {
            wordCodify += "X"
        }
        wordsCodify.push(wordCodify)
        wordCodify = ""
      }
      for (i = 0; i < word.length; i++) {
        text = text.replace(word[i], wordsCodify[i])
      }
      return text
    }
  }
}

module.exports = replace
