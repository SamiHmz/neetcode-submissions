class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length
        let m = n
        let i = 0
        while (i<m) {
            nums[n] = nums[i]
            i++;
            n++;
        }
       return nums 
    }
}
