function n(nums){
  let minNow=Infinity
  let maxProfit=0
  for(let i=0;i<nums.length;i++){
    if(nums[i]<minNow){
        minNow=nums[i]
    }else{
        maxProfit=Math.max(maxProfit,nums[i]-minNow)
    }

  }
  return maxProfit
}
console.log(n([7,6,4,3,1]))