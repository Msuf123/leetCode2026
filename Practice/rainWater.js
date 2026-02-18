function n(nums){
 let left=0
 let right=nums.length-1
 let maxWater=0
 while(left<right){
  const width=left-right
  const minHeight=Math.min(nums[left],nums[right])
  maxWater=Math.max(maxWater,width*minHeight)
  if(nums[left]<nums[right]){
    left++
  }else{
    right--
  }

 }
 return maxWater
}
console.log(n())