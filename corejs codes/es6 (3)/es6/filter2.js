let empDetails=[
    {name:"anuj",salary:67899,dept:"accounts"},
    {name:"anil",salary:57899,dept:"it"},
    {name:"sunil",salary:47899,dept:"accounts"},
    {name:"rahul",salary:87899,dept:"it"},
    {name:"rohit",salary:97899,dept:"accounts"},
    {name:"xyz",salary:66899,dept:"it"}
]
let filtered=empDetails.filter(data=> data.dept=="it");
console.log(filtered)
let filtered1=empDetails.filter(data=> data.salary>=70000 && data.dept=="it");
console.log(filtered1)