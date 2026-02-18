function n(nums){
    const m=nums.length
    let n=nums[0].length
    
 let firstRowZero=false
 let firstColumnZero=false
 for(let i=0;i<nums.length;i++){
    if(nums[i][0]===0){
 firstRowZero=true
    }
 }
 for(let j=0;j<nums.length;j++){
    if(nums[0][j]===0){
 firstColumnZero=true
    }
 }
 for(let i=1;i<nums.length;i++){
    for(let j=1;j<nums.length;j++){
        if(nums[i][j]===0){
            nums[i][0]=0
            nums[0][j]=0
        }
    }
 }
 for(let i=1;i<nums.length;i++){
    for(let j=1;j<nums.length;j++){
        if((nums[i][0]||nums[0][j])===0){
            nums[i][j]=0
        }
    }
 }
 if(firstRowZero){
    for(let i=0;i<nums.length;i++){

    }
 }
}
console.log(n())