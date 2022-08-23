// Soal 2

const sentence = "Saya sangat senang mengerjakan soal algoritma";

function longestWord(sentence) {
  let splitWord = sentence.split(' ');
  let longestWord = 0;
  let word = '';

  for (let i = 0; i < splitWord.length; i++) {
    if(splitWord[i].length > longestWord) {
      word = splitWord[i];
      longestWord = splitWord[i].length;
    }
  }

  return `${word}: ${longestWord} characters`;
}

console.log(longestWord(sentence));