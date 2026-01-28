function n(nums){
 let threshold=nums.length/2
 let map=new Map()
 for(let i=0;i<nums.length;i++){
   map.set(nums[i],(map.get(nums[i])??0)+1)
   if(map.get(nums[i])>threshold){
    return nums[i]
   }
 }
}
console.log(n([2,2,1,1,1,2,2]))