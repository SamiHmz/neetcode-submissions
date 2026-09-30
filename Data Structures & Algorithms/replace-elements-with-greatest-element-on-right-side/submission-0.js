class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxRightIndex = 0;
        let i = 0;

        while (i < arr.length - 1) {
            // find the new maxRightIndex
            if (i === maxRightIndex) {
                maxRightIndex = i + 1;
                for (let j = i + 2; j < arr.length; j++) {
                    if (arr[j] > arr[maxRightIndex]) maxRightIndex = j;
                }
            }
            arr[i] = arr[maxRightIndex];
            i++;
        }
        arr[arr.length - 1] = -1;
        return arr;
    }
}
