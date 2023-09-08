/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0;i<flowerbed.length;i++){
      if(n==0) break;
      if(flowerbed[i]==1){
        continue
      }else{
        if(i==0 && flowerbed[i+1]!=1){
            flowerbed[0]=1;
            n-=1;
        }
        else if(i==flowerbed.length-1 && flowerbed[i-1]!=1){
          flowerbed[i]=1;
          n-=1;
        }
        else if(flowerbed[i-1]==1 || flowerbed[i+1]==1){
          continue
        }else{
          flowerbed[i]=1;
          n-=1;
        }
      }
    }

    if(n==0) return true;
    else return false
};
