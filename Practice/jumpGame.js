function n(nums){
 const maxStep=0
 for(let i=0;i<nums.length;i++){
    if(i>maxStep){
     return false
    }
   maxStep=Math.max(maxStep,i+nums[i])
 }
 return true
}
console.log(n())