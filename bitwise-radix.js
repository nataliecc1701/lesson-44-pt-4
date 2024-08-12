/** bitwise, memory-optimized, binary version of radixSort */

function radixSort(arr) {
    let i = 0;
    let needToRepeat = true;
    
    while (needToRepeat) {
        needToRepeat = false;
        const slicer = 2**i;
        let leftPointer = 0;
        
        console.log("slicer: ", slicer)
        // haven't found a way to solve the problems needed to do the right bucket in-place
        const rightBucket = [];
        for(let j=0; j < arr.length; j++) {
            console.log("comparing: ", arr[j])
            if (arr[j] & slicer) {
                console.log(`right side`);
                rightBucket.push(arr[j])
            }
            else {
                console.log(`left side`);
                [ arr[j], arr[leftPointer] ] = [ arr[leftPointer], arr[j] ];
                leftPointer++;
            }
        }
        // concatenate the buckets
        if (rightBucket.length > 0) {
            needToRepeat = true;
            for (let k = 0; k < rightBucket.length; k++) {
                arr[leftPointer+k] = rightBucket[k]
            }
        }
        i++;
        console.log(arr)
    }
    return arr;
}