/*
Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
     if (str1.length < str2.length)
      {
        return gcdOfStrings(str2, str1);
      }
      else if (!str1.startsWith(str2))
      {
        return "";
      }
      else if (str2.length == 0)
      {
        return str1;
      }
      else
      {
        return gcdOfStrings(str1.substring(str2.length), str2);
      }
};
