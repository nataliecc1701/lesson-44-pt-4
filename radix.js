/** takes a number and a place and returns the digit in that decimal place
 * place is little-endian (0 is the ones place, 1 is the 10s place, and so on)
 */

function getDigit(num, place) {
    return Math.floor((num%10**(place+1))/(10**place))
}

/** takes an integer num and returns its number of digits */

function digitCount(num) {
    return Math.ceil(Math.log10(num+1));
}

/** takes an array of integers and returns the entry with the most digits */

function mostDigits(arr) {
    let mostSeen = 0;
    for (val of arr) {
        const curr = digitCount(val)
        if (curr > mostSeen) mostSeen=curr;
    }
    return mostSeen;
}

/** divide an array into buckets based on place */

function divideArrayIntoBuckets(arr, place) {
    // make our buckets
    const buckets = []
    while (buckets.length < 10) {
        buckets.push([])
    }
    for (val of arr) {
        buckets[getDigit(val, place)].push(val)
    }
    return buckets;
}

/** non-comparative sort for integers */

function radixSort(arr) {
    const most = mostDigits(arr);
    
    for(i = 0; i <= most; i++) {
        arr = divideArrayIntoBuckets(arr, i).flat()
    }
    return arr;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort }