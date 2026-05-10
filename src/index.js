function MyArray(...items) {
    this.length = 0;

    for (let i = 0; i < items.length; i++) {
        this[i] = items[i];
        this.length++;
    }
}

MyArray.prototype.reduceRight = function (callback, initialValue) {
    if (typeof callback !== 'function')
        throw new TypeError;
    if (this.length === 0 && arguments.length < 2)
        throw new TypeError;

    let accumulator;
    let startIndex;

    if (arguments.length > 1) {
        accumulator = initialValue;
        startIndex = this.length - 1;
    }
    else {
        accumulator = this[this.length - 1];
        startIndex = this.length - 2;
    }

    for (let i = startIndex; i >= 0; i--)
        accumulator = callback(accumulator, this[i], i, this);
    return accumulator;
}

const arr = new MyArray(1, 2, 3, 4);
const result = arr.reduceRight((acc, curr) => {
    return acc + curr;
})

console.log(result);