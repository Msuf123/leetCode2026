function n(nums){
 let left=0
 let right=nums.length-1;
 let leftMax=0
 let rightMax=0
 let water=0
 while(left<right){
    if(nums[left]<nums[right]){
        if(nums[left]>=leftMax){
            leftMax=nums[left]
        }else{
            water+=leftMax-nums[left]
        }
        left++
    }
    else{
        if(nums[right]>=rightMax){
            rightMax=nums[right]
        }else{
            water+=rightMax-nums[right]
        }
        right--
    }
 }
 return water
}
console.log(n())