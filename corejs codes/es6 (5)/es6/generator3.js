let generate={
    *[Symbol.iterator]()
    {
    yield "sumit";
    yield "amit";
    yield "anuj";
    yield "complete";
    //yield "one";
    }
}
console.log(generate)
// const gen=generate();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
for(let value of generate)
{
    console.log(value)
}