// Soal 3

const input = ['xc', 'dz', 'bbb', 'dz'];  
const query = ['bbb', 'ac', 'dz'];

function search(input, query) {
  let result = [];
  for (let i = 0; i < query.length; i++) {
    let counter = 0;
    for (let j = 0; j < input.length; j++) {
      if(query[i] === input[j]) {
        counter = counter + 1;
      }
    }
    result.push(counter);
  }

  return result;
}

console.log(search(input, query));