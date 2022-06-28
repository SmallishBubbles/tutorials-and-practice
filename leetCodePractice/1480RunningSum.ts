/*
1480. Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6

*/

// Solution

function runningSum(nums: number[]): number[] {
    // chose not to modify orriginal array
    let runningSumArr:number[] = [];
    runningSumArr.push(nums[0])

    for (let i = 1; i < nums.length; i++) {
        runningSumArr.push(nums[i] + runningSumArr[i-1]);
    }
    
    return runningSumArr;
};

