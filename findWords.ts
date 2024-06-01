function findWords(inputString: string, dictionary: string[]): string[] {
  let hash: { [key: string]: number } = {};//Used to record number of letters in input string
  let ans: string[] = [];//Array we will return

  //Initialized the hash so each key is a letter in the inputString with the count of how many times it occurs
  for (let letter of inputString) {
    if (hash[letter]) {
      hash[letter] += 1;
    } else {
      hash[letter] = 1;
    }
  }

  dictionary = Array.from(new Set<string>(dictionary));//This makes the dictionary a set, then changes it back to an array. This will eliminate any duplicate values from the input.


  //Initializes the function that compares a word from the dictionary to see if it can be formed by the inputString
  function compare(hash: { [key: string]: number }, word: string): boolean {
    for (let letter of word) {
      if (hash[letter]) {
        hash[letter] -= 1;
      } else {
        return false;
      }
    }
    return true;
  }

  let duplicateHash: { [key: string]: number }//Initializing duplicate hash since we need a unique hash for each comparison

  //Goes through each word in the dictionary and see if it can be formed by the inputString. If it can we push the word into ans and return it.
  for (let word of dictionary) {
    if (inputString.length >= word.length) {
      duplicateHash = { ...hash }
      if (compare(duplicateHash, word)) {
        ans.push(word);
      }
    }
  }

  return ans;
}

console.log(findWords('ate', ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good", "ea"]));
console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]));
console.log(findWords("", ["log", ""]));

