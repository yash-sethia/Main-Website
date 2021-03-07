var syllables = function SyllableCount(word) {
    word = word.toLowerCase();                                     //word.downcase!
    if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
      word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
      return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
  }

var words = function words(x) {
    return (x.split(/\s+/) || ['']).length;
};
var sentences = function sentences(x) {
    return (x.split('. ') || ['']).length;
};
var syllablesPerWord = function syllablesPerWord(x) {
    return syllables(x) / words(x);
};
var wordsPerSentence = function wordsPerSentence(x) {
    return words(x) / sentences(x);
};

function rate(x) {
    return 206.835 - 1.015 * wordsPerSentence(x) - 84.6 * syllablesPerWord(x);
};
function grade(x) {
    return 0.39 * wordsPerSentence(x) + 11.8 * syllablesPerWord(x) - 15.59;
};
