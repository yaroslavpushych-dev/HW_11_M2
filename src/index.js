function MyArray(...items) {
    this.items = items;
}

MyArray.prototype.reduceRight = function (callback, initialValue) {
    if(typeof callback !== 'function')
        throw new TypeError('Callback must be a function!');
    
    if(this.items.length === 0 && arguments.length < 2)
        throw new TypeError('Reduce of empty array with no initial value');

    const arr = this.items;
    let accumulator;
    let startIndex;

    if (arguments.length > 1) {
        accumulator = initialValue;
        startIndex = arr.length - 1;
    }
    else {
        accumulator = arr[arr.length - 1];
        startIndex = arr.length - 2;
    }

    for (let i = startIndex; i >= 0; i--)
        accumulator = callback(accumulator, arr[i], i, arr);
    return accumulator;
}

const arr = new MyArray(1, 2, 3, 4);
const result = arr.reduceRight((acc, current) => {
    return acc + current;
})

console.log(result);