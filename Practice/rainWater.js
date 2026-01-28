function n(nums){
 let left=0
 let right=nums.length-1
 let maxLen=0
 while(left<right){
    let width=left-right
   let min=Math.min(nums[left],nums[right])
   maxLen=Math.max(maxLen,min*width)
   if (left<min) {
    left++
   } else {
    right--
   }
 }
}
console.log(n())