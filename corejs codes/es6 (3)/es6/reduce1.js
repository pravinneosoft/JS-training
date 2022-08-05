let sal=[2345,67,8999,6767];
let totalSalary=sal.reduce((total,val)=>{
    console.log(total+'---'+val)
    return total+val 
},0)
console.log("The total is "+totalSalary)