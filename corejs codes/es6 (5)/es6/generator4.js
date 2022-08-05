function *first(){
   yield 2;
   yield 3;
}
function *second(){
    yield 1;
    yield* first();
    yield 4
  
}
for(let value of second()){
    console.log(value);
}