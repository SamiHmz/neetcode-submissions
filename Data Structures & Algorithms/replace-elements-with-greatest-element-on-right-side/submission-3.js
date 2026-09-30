class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n = arr.length
        let prevElement = arr[n-1]
        arr[n-1] = -1
        for (let i = n-2; i >= 0; i--) {
            let temp = arr[i]
            arr[i] = Math.max(prevElement,arr[i+1]) 
            prevElement = temp
        }
        return arr
    }
}
