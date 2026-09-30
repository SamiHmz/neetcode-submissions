class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        let i = 0;
        while (i < nums.length - 1 && !result) {
            let j = i + 1;
            while (j < nums.length && !result) {
                if ((nums[i] === nums[j])) {
                    result = true;
                }
                j++;
            }
            i++;
        }
        return result;
    }
}
