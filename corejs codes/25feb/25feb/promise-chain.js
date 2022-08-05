function getUsers(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          resolve(2)
       },2000)
    })
}
const promise= getUsers();
promise.then((user)=>{
    console.log(user)
    return user*10;
})
 .then(res=>{
     console.log(res)//20
     return res*5;
 })
 .then(res=>{
    console.log(res)//100
    
})