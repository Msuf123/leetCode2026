function n(nums){
let slow=nums[0]
let fast=nums[0]
do{
 slow=nums[slow]
 fast=nums[nums[fast]]

}
while(fast!==slow)
slow=nums[0]
while(slow!==fast){
 fast=nums[fast]
 slow=nums[slow]
}
return slow
}
console.log(n())