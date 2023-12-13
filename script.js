function mapLetters(word) {
  // Initialize an empty object to store the letter indices
  const letterMap = {};

  // Loop through each character in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // Check if the letter is already in the map
    if (letterMap.hasOwnProperty(letter)) {
      // If yes, push the current index to the existing array
      letterMap[letter].push(i);
    } else {
      // If no, create a new array with the current index
      letterMap[letter] = [i];
    }
  }

  return letterMap;
}

// Example usage:
const result1 = mapLetters("dodo");
const result2 = mapLetters("froggy");
const result3 = mapLetters("grapes");

console.log(result1); // { d: [0, 2], o: [1, 3] }
console.log(result2); // { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(result3); // { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
