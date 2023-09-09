/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const vowels = 'aeiouAEIOU'
var maxVowels = function(s, k) {
    let counter=0
    let max=0;
    for(let i =0;i<=s.length-k;i++){
        if(i==0){
            for (let j = 0; j < k; j++) {
                if (vowels.includes(s[j])){
                    counter++;
                }
            }
        }else{
            if (vowels.includes(s[i - 1])) {
                counter--;
            }if (vowels.includes(s[i + k - 1])) {
                counter++;
            }
        }
        if (counter > max) {
            max = counter; 
        }
        if (max === k) {
            return max;
        }
    }
    return max;
};
