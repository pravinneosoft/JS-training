function addAll(...args){
    let sum=0;
    args.forEach(val=> sum+=val);
    return sum;
  }
console.log(addAll(2,3))
console.log(addAll(2,3,4))
console.log(addAll(2,3,4,5))