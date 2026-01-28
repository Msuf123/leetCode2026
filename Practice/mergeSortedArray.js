function n(nums1,nums2){
let i=nums1.length
let j=nums2.length
let k=i+j-1
while(i>=0&&j>=0){
  if(nums1[i]>nums2[j]){
    nums1[k]=nums1[i]
    i--
  }else{
    nums1[k]=nums2[j]
    j--
  }
  k--
}
while(j>=0){
  nums1[k]=nums2[j]
  k--
  j--
}
}
console.log(n([1,2,3,4,0,0,0,0],[1,5,6,7]))