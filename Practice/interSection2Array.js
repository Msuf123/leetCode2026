function n(nums1,nums2){
    let elements=new Map()
    let result=[]
  for(let i=0;i<nums1.length;i++){
   elements.set(nums1[i],(elements.get(nums1[i])??0)+1)
  }
  for(let i=0;i<nums2.length;i++){
    if(elements.has(nums2[i])){
      result.push(nums2[i])
      elements.set(nums2[i],elements.get(nums2[i])-1)
      if(elements.get(nums2[i])===0){
        elements.delete(nums2[i])
      }
    }
  }
  return result
}
console.log(n([1,2,2,1],[2,2]))