function fruitsIterator(values)
{
    let nextIndex=0;
    return {
        next :function(){
            if(nextIndex < values.length){
              return {
                  value:values[nextIndex++],
                  done:false
              }
            }
            else {
                return {done:true}
            }
        }
    }
}
const fruits=["Apple","Banana","Mango"];
console.log(fruits);
const myfruit=fruitsIterator(fruits);
console.log(myfruit.next())
console.log(myfruit.next())
console.log(myfruit.next())
console.log(myfruit.next())