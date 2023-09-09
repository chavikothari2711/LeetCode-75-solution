/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const n = asteroids.length;
    const s = [];
    for (let i = 0; i < n; i++) {
        if (asteroids[i] > 0 || s.length === 0) {
            s.push(asteroids[i]);
        } 
        else {
            while (s.length > 0 && s[s.length - 1] > 0 && s[s.length - 1] < Math.abs(asteroids[i])) {
                s.pop();
        }
        if (s.length > 0 && s[s.length - 1] === Math.abs(asteroids[i])) {
            s.pop();
        } 
        else {
            if (s.length === 0 || s[s.length - 1] < 0) {
                s.push(asteroids[i]);
            }
        }
        }
    }
    const res = new Array(s.length);
    for (let i = s.length - 1; i >= 0; i--) {
        res[i] = s.pop();
    }
    return res;
}
