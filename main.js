let dupRemoval=(testArr,flag)=>{
  if(flag){
    testArr.sort((a,b)=>a-b);
    return Array.from(new Set(testArr));
  }
  else{
     testArr.sort((a,b)=>b-a);
     return Array.from(new Set(testArr));
  }
  
}
console.log(dupRemoval(new Array(1,1,2,3,5,6,6,7,9),9))
