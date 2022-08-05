function getUsers(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         resolve([
             {fname:"anuj",lname:"singh"},
             {fname:"sumit",lname:"joshi"}
         ])
       },2000)
    })
}
const promise= getUsers();
promise.then((user)=>{
    console.log(user)
})