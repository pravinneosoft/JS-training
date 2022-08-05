function isPositive(value){
    return value >0;
}
let arr=[2,4,6,-8,9,-11,78];
let filtered=arr.filter(isPositive)
console.log(filtered)