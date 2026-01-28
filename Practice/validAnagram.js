function ana(s1,s2){
  const arrays=new Array(26).fill(0)
    for(let s of s1){
     arrays[s.charCodeAt(0)-97]++
  }
  for(let s of s2){
    arrays[s.charCodeAt(0)-97]--
  }
  for(let i of arrays){
    if(i!==0){
        return false
    }
  }
  return true
}
console.log(ana('wet','ets'))