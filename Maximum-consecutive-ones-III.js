/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let no_offlips = k;
    let start=0;
    let count=0;
    let maxcount=0;
    for(let i=0;i<nums.length;i++){
        let x=nums[i]
        if(x==1){
            count++;
        }
        else if(x==0 && no_offlips!=0){
            count+=1;
            no_offlips-=1;
        }
        else{
            maxcount=maxcount>count?maxcount:count;
            i=start;
            start+=1;
            count=0;
            no_offlips = k;
        }
    }
    maxcount=maxcount>count?maxcount:count;
    return maxcount;
};
