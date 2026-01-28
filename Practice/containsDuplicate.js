function n(nums){
  const sets=new Set()
  for(let i of nums){
    if(sets.has(i)){
        return true
    }else{
        sets.add(i)
    }
  }
  return false
}
console.log(n([1,2,3,0,9,12]))