function n(nums,target){
  let ma=new Map()
  for(let i=0;i<nums.length;i++){
    const coffeient=target-nums[i]
    if(ma.has(coffeient)){
      return [ma.get(coffeient),i]
    }
    else{
      ma.set(nums[i],i)
    }
  }
}
console.log(n([1,4,5,3,8],12))