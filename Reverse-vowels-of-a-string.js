/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU";
    var arr=[...s];
    var pos=[];
    for(let i=0;i<arr.length;i++){
        if(vowels.includes(arr[i]))pos.push(i)
    }
   for(let i=0;i<pos.length/2;i++){
       var temp = arr[pos[i]];
       arr[pos[i]] = arr[pos[pos.length-i-1]];
       arr[pos[pos.length-i-1]] = temp; 
   }
   return arr.join("")
};
