let mname="sumit";
let newName=Array.prototype.map.call(mname,(val)=>{
   return val+' neo';
})
console.log(newName)
let arr=[2,3,4,5,6];
let squareArr=arr.map(val=> val*val);
console.log(squareArr)
