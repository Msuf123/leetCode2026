function n(nums){
 let write=1
 for(let i=1;i<nums.length;i++){
    if(nums[i]!==nums[i-1]){
        nums[write]=nums[i]
        write++
    }
 }
 return nums
}
console.log(n([1,2,2,3,4,4,4,4,8]))