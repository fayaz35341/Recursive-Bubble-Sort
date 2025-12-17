class Solution {
    bubbleSort(nums) {
        let n=nums.length 
        function b_s1(nums,n){
            if (n===1){
                return;
            }
            b_sp(nums,0,n)
            b_s1(nums,n-1)
        }
        function b_sp(nums,i,n){
            if (i === (n-1)){
                return 
            }
            if (nums [i]>nums[i+1]){
                [nums[i],nums[i+1]] = [nums[i+1], nums[i]]
            }
            b_sp(nums,i+1,n)
        }
        b_s1(nums,n)
        return nums
    }
}

let nums=[1,5,44,3,0,22]
console.log(new Solution().bubbleSort(nums))
