# weekend-health

This repo contains three files:
1. findWords.ts that contains the algorithm.
2. findWords.js a file that is compiled from findWords.ts
3. An interact html file that contains the algorithm and can be run from any browser locally.

For the function findWords, we need to go through each word in the dictionary and determine if the word can be formed by the inputString. Here is my approach:

1. Create a hash from the inputString with each letter of the inputString being a key and the value being how many times it occurs. For example the hash for 'leed' would be: {'l': 1, 'e': 2, 'd': 1}
2. I created a function that compares this hash with the word from the dictionary. We go through each letter of word and subtract it from the hash value if that letter is in the hash. If the letter from the word is not in the hash or the value of the key in the hash becomes -1 then we know the word cannot be formed by the inputString and reject it. If we go through the word without this occuring then the word can be formed and we accept it.
3. Go through each word in the dictionary and determine if it can be formed by the inputString using the above formula. If it can add it to the array of words. Once we have gone through every word we can return this list.

We can avoid a lot of exceptions since from the definition of the challenge that the inputString will only be lowercase letters. If the inputString or the dicionary had strings that contained other characters besides English letters then we would need to add exceptions and rules on how to handle these situations. We would also want to add fucntions that would make any uppercase letters into lowercase letters so our function would work properly. 

We do have to deal with duplicate words in the dictionary so we put the dictionary into a set then back into an array to eliminate any duplicates. I decided to include empty strings into this algorithm since there was no specification on what do with this edge case.