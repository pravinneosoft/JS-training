const promise=new Promise((resolve,reject)=>{
    let age=13;
    if(age>=18){
        resolve("Elligible")
    }
    else {
        reject("Not Elligibel")
    }
})
promise.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err)
})