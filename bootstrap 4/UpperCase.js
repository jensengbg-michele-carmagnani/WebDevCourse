1  function upperCaseFirst(word) {
    2    return word[0].toUpperCase() + word.slice(1);
    3  }
    4 
    5  function upperCaseWords(sentence) {
    6    var words = sentence.split(" ");
    7    for (var i = 0; i < words.length; i++) {
    8      words[i] = upperCaseFirst(words[i]);
    9    }
    10   return words.join(" ");
    11 }
    12
    13 upperCaseWords("lowercase words");