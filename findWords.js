var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function findWords(inputString, dictionary) {
    var hash = {}; //Used to record number of letters in input string
    var ans = []; //Array we will return
    //Initialized the hash so each key is a letter in the inputString with the count of how many times it occurs
    for (var _i = 0, inputString_1 = inputString; _i < inputString_1.length; _i++) {
        var letter = inputString_1[_i];
        if (hash[letter]) {
            hash[letter] += 1;
        }
        else {
            hash[letter] = 1;
        }
    }
    dictionary = Array.from(new Set(dictionary)); //This makes the dictionary a set, then changes it back to an array. This will eliminate any duplicate values from the input.
    //Initializes the function that compares a word from the dictionary to see if it can be formed by the inputString
    function compare(hash, word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var letter = word_1[_i];
            if (hash[letter]) {
                hash[letter] -= 1;
            }
            else {
                return false;
            }
        }
        return true;
    }
    var duplicateHash; //Initializing duplicate hash since we need a unique hash for each comparison
    //Goes through each word in the dictionary and see if it can be formed by the inputString. If it can we push the word into ans and return it.
    for (var _a = 0, dictionary_1 = dictionary; _a < dictionary_1.length; _a++) {
        var word = dictionary_1[_a];
        if (inputString.length >= word.length) {
            duplicateHash = __assign({}, hash);
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
