let arr = [2, 4, 6, 8, 9];
let newArr = arr.map((val, index) => {
    return { key: index, value: val }
})
console.log(JSON.stringify(newArr));