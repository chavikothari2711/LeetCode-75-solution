/*
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var s="";
    if(word1.length<=word2.length){
        for(let i=0;i<word1.length;i++){
            s=s+word1[i]+word2[i];
        }
        if(word1.length<word2.length) s+=word2.slice(word1.length,)
    }else{
        for(let i=0;i<word2.length;i++){
            s=s+word1[i]+word2[i];
        }
        s+=word1.slice(word2.length,)
    }
    return s;
};
