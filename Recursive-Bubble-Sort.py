class Solution:
    def bubbleSort(self, nums):
        n=len(nums)
        def bubbleSort1( nums, n):
            if n==1:
               return 
            bubbleSort_pass(nums,0,n)
            bubbleSort1(nums,n-1)
        def bubbleSort_pass( nums,i,n):
            if i==(n-1):
                return 
            if nums[i]>nums[i+1]:
                nums[i],nums[i+1]=nums[i+1],nums[i]
            bubbleSort_pass(nums,i+1,n)
        bubbleSort1(nums,n)
        return nums
        
arr = [5, 1, 4, 2, 8]
print(Solution().bubbleSort(arr))
