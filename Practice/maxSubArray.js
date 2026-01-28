function n(nums){
   let currentMax=nums[0]
   let totalMax=nums[0]
   for(let s=1;s< nums.length;s++){
    currentMax=Math.max(currentMax+nums[s],nums[s])
    totalMax=Math.max(currentMax,totalMax)
   }
   return totalMax
}
console.log(n([1,5,6,-2.-9,10]))