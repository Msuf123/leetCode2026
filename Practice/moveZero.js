function n(nums){
let write=0
for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){
        nums[write]=nums[i]
        write++
    }
}
while(write<nums.length){
    nums[write]=0
    write++
}
return nums
}
console.log(n([1,3,0,4,0,5,0,7]))