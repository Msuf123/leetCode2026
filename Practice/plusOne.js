function n(nums){
 for(let i=nums.length-1;i>=0;i--){
    if(nums[i]<9){
        nums[i]+=1
        return nums
    }
    else{
        nums[i]=0
    }
 }
 nums.unshift(1)
 return nums
}
console.log(n([1,2,3]))
console.log(n([1,0,0]))
console.log(n([9,9,9]))