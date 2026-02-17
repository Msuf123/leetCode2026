function n(nums){
let result=new Array(nums.length-1)
result[0]=1
for(let i=1;i<nums.length;i++){
  result[i]=nums[i-1]*result[i-1]
}
let right=1
for(let i=nums.length-1;i>=0;i--){ 
  result[i]=result[i]*right 
  right=nums[i]*right
}
}
console.log(n()) 
