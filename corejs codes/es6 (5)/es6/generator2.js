function * idGenerator(){
    let i=0;
    while(true){
        yield i++;
    }
}
const ids=idGenerator();
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);

