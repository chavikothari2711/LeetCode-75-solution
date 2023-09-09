/*
Given a binary array nums, you should delete one element from it.
Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let deletecount=1;
  let start=0;
  let count=0;
  let maxcount=0;
  for(i=0;i<nums.length;i++){
    let x = nums[i];
    if(x==1)
        count+=1;
    else if(x==0 && deletecount!=0){
        deletecount-=1;
    }
    else{
        i=start;
        maxcount=maxcount>count?maxcount:count;
        start+=1;
        deletecount=1;
        count=0;
    }
  }
  maxcount=maxcount>count?maxcount:count;
  if(deletecount!=0) maxcount-=1;
  return maxcount
};
