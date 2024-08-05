/** helper function: bucket everything
 * takes an array and a power of two to bucket it by
 */

function radixBucket(arr, power) {
    // create our buckets
    const buckets = [ [], [] ]
    
    for (val of arr) {
        if (Math.floor((val % 2**(power+1))/2**power) > 0) {
            buckets[1].push(val);
        }
        else buckets[0].push(val);
    }
    
    return {
        arr: [...buckets[0], ...buckets[1] ],
        hasLarge: (buckets[1].length > 0) ? true : false
    }
}

function radixSort(arr) {
    let needToRepeat = true;
    let i = 0;
    let workingArray = [...arr]
    
    while (needToRepeat) {
        const buckets = radixBucket(workingArray, i)
        workingArray = buckets.arr;
        needToRepeat = buckets.hasLarge;
        i++;
    }
    return workingArray;
}

module.exports = radixSort;