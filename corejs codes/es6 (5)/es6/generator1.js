function *generate(){
    yield "sumit";
    yield "amit";
    yield "anuj";
    yield "complete";
    //yield "one";
}
const gen=generate();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
