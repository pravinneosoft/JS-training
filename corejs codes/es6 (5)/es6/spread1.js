let obj={a:1,b:2,c:3};
let objCopy={...obj}
console.log(JSON.stringify(obj) === JSON.stringify(objCopy));//true
console.log(obj===objCopy)//false (not a same reference)
obj.d=4;
console.log(JSON.stringify(obj))
console.log(JSON.stringify(objCopy))