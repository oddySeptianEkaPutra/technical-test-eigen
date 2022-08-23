// Soal 1

function reverseWord(input) {
  let split = input.split('', input.length-1);
  let reverse = split.reverse();

  return reverse.join('') + input[input.length-1];
}

console.log(reverseWord('NEGIE1'));