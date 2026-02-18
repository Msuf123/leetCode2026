function n(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
 [nums[i][j],nums[j][i]]=[nums[j][i],nums[i][j]]
        }
       
    }
    for(let i=0;i<nums.length;i++){
        nums[i].reverse()
    }
}
console.log(n())